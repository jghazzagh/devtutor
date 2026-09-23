(function () {
  'use strict';

  const content = window.SKILLS_CONTENT;
  const app = document.getElementById('main-content');
  const nav = document.getElementById('primary-nav');
  const menuButton = document.getElementById('menu-button');
  const helpDialog = document.getElementById('help-dialog');
  const helpContent = document.getElementById('help-content');
  const announcer = document.getElementById('progress-announcer');
  const STORAGE_KEY = 'mcc-skills-coach-v1';
  let activeLesson = null;

  const defaultState = {
    completed: [],
    answers: {},
    attempts: {},
    fields: {},
    confidence: {}
  };

  function loadState() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
      return Object.assign({}, defaultState, saved || {});
    } catch (error) {
      return Object.assign({}, defaultState);
    }
  }

  let state = loadState();

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (error) {
      announcer.textContent = 'Progress could not be saved in this browser.';
    }
  }

  function escapeHTML(value) {
    return String(value || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function routeParts() {
    return (location.hash || '#/home').replace(/^#\/?/, '').split('/').filter(Boolean);
  }

  function subjectProgress(subjectKey) {
    const lessons = content[subjectKey].lessons;
    const done = lessons.filter(lesson => state.completed.includes(subjectKey + ':' + lesson.id)).length;
    return { done: done, total: lessons.length, percent: Math.round((done / lessons.length) * 100) };
  }

  function totalProgress() {
    const total = content.math.lessons.length + content.inrw.lessons.length;
    return { done: state.completed.length, total: total, percent: Math.round((state.completed.length / total) * 100) };
  }

  function lessonStatus(subjectKey, lesson) {
    return state.completed.includes(subjectKey + ':' + lesson.id) ? 'Complete' : 'Not completed';
  }

  function lessonUrl(subjectKey, lesson) {
    return '#/lesson/' + subjectKey + '/' + lesson.id;
  }

  function setActiveNav(section) {
    document.querySelectorAll('[data-nav]').forEach(link => {
      if (link.dataset.nav === section) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
  }

  function renderHome() {
    activeLesson = null;
    setActiveNav('home');
    const mathProgress = subjectProgress('math');
    const inrwProgress = subjectProgress('inrw');
    const options = []
      .concat(content.math.lessons.map(l => '<option value="' + lessonUrl('math', l) + '">Math: ' + escapeHTML(l.title) + '</option>'))
      .concat(content.inrw.lessons.map(l => '<option value="' + lessonUrl('inrw', l) + '">Reading & Writing: ' + escapeHTML(l.title) + '</option>'))
      .join('');

    app.innerHTML = '<div class="page-shell">' +
      '<section class="welcome-panel">' +
        '<span class="eyebrow">McLennan Community College</span>' +
        '<h1>What would you like to work on?</h1>' +
        '<p>Choose a skill, try a short practice activity, and open guided help whenever you need another step or explanation.</p>' +
        '<div class="quick-actions">' +
          '<a class="button" href="#/math">Practice Math</a>' +
          '<a class="button secondary" href="#/inrw">Practice Reading & Writing</a>' +
        '</div>' +
      '</section>' +

      '<section aria-labelledby="paths-heading">' +
        '<div class="section-heading"><div><span class="eyebrow">Choose a path</span><h2 id="paths-heading">Two ways to strengthen your skills</h2></div></div>' +
        '<div class="path-grid">' +
          pathCard('math', mathProgress) +
          pathCard('inrw', inrwProgress) +
        '</div>' +
      '</section>' +

      '<section class="content-card" aria-labelledby="quick-find-heading">' +
        '<span class="eyebrow">I need help right now</span>' +
        '<h2 id="quick-find-heading">Go directly to a topic</h2>' +
        '<p>Select the skill that is closest to the problem you are working on.</p>' +
        '<div class="answer-row">' +
          '<div class="field"><label for="topic-jump">Choose a topic</label><select id="topic-jump"><option value="">Select a lesson</option>' + options + '</select></div>' +
          '<button class="button" id="topic-jump-button" type="button">Open Lesson</button>' +
        '</div>' +
      '</section>' +

      '<section class="content-card" aria-labelledby="support-heading">' +
        '<span class="eyebrow">You do not have to do this alone</span>' +
        '<h2 id="support-heading">Need more than guided practice?</h2>' +
        '<p>MCC Academic Support and Tutoring offers free in-person and online help. You can connect with a tutor whenever a topic needs a real conversation.</p>' +
        '<a class="button outline" href="#/tutoring">View Tutoring Options</a>' +
      '</section>' +
    '</div>';
  }

  function pathCard(subjectKey, progress) {
    const subject = content[subjectKey];
    return '<article class="path-card ' + subject.colorClass + '">' +
      '<div class="path-icon" aria-hidden="true">' + subject.symbol + '</div>' +
      '<h2>' + escapeHTML(subject.title) + '</h2>' +
      '<p>' + escapeHTML(subject.tagline) + '</p>' +
      '<div class="progress-label"><span>Your progress</span><span>' + progress.done + ' of ' + progress.total + ' lessons</span></div>' +
      '<div class="mini-progress" role="progressbar" aria-label="' + escapeHTML(subject.shortTitle) + ' progress" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + progress.percent + '"><span style="width:' + progress.percent + '%"></span></div>' +
      '<p><a class="button ' + (subjectKey === 'inrw' ? 'outline' : '') + '" href="#/' + subjectKey + '">View ' + escapeHTML(subject.shortTitle) + ' Lessons</a></p>' +
    '</article>';
  }

  function renderSubject(subjectKey) {
    activeLesson = null;
    const subject = content[subjectKey];
    if (!subject) return renderNotFound();
    setActiveNav(subjectKey);
    const progress = subjectProgress(subjectKey);
    const cards = subject.lessons.map((lesson, index) => {
      const complete = lessonStatus(subjectKey, lesson) === 'Complete';
      return '<article class="lesson-card">' +
        '<span class="lesson-number" aria-hidden="true">' + (index + 1) + '</span>' +
        '<h3>' + escapeHTML(lesson.title) + '</h3>' +
        '<p>' + escapeHTML(lesson.summary) + '</p>' +
        '<span class="status-chip ' + (complete ? 'complete' : '') + '">' + (complete ? '✓ Complete' : lesson.time) + '</span>' +
        '<p><a class="button small ' + (complete ? 'outline' : '') + '" href="' + lessonUrl(subjectKey, lesson) + '">' + (complete ? 'Practice Again' : 'Start Lesson') + '</a></p>' +
      '</article>';
    }).join('');

    app.innerHTML = '<div class="page-shell">' +
      '<section class="subject-hero ' + subject.colorClass + '">' +
        '<div><span class="eyebrow">Guided practice unit</span><h1>' + escapeHTML(subject.title) + '</h1><p>' + escapeHTML(subject.tagline) + '</p>' +
        '<div class="progress-label"><span>Unit progress</span><span>' + progress.done + ' of ' + progress.total + ' complete</span></div>' +
        '<div class="mini-progress" role="progressbar" aria-label="Unit progress" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + progress.percent + '"><span style="width:' + progress.percent + '%"></span></div></div>' +
        '<div class="hero-symbol" aria-hidden="true">' + subject.symbol + '</div>' +
      '</section>' +
      '<div class="section-heading"><div><span class="eyebrow">Lesson path</span><h2>Work in order or choose the skill you need</h2></div></div>' +
      '<div class="card-grid">' + cards + '</div>' +
      '<section class="content-card"><h2>How guided help works</h2><p>Every lesson includes explanations, examples, practice, and a Guided Help button. Help begins with a small hint and reveals more only when you request it.</p><a class="button outline" href="#/tutoring">I would rather work with a tutor</a></section>' +
    '</div>';
  }

  function getLesson(subjectKey, lessonId) {
    const subject = content[subjectKey];
    if (!subject) return null;
    const index = subject.lessons.findIndex(item => item.id === lessonId);
    return index < 0 ? null : { subject: subject, lesson: subject.lessons[index], index: index };
  }

  function renderLesson(subjectKey, lessonId) {
    const found = getLesson(subjectKey, lessonId);
    if (!found) return renderNotFound();
    const subject = found.subject;
    const lesson = found.lesson;
    const index = found.index;
    activeLesson = { subjectKey: subjectKey, lesson: lesson, index: index };
    setActiveNav(subjectKey);

    const sidebarItems = [
      ['learn', 'Learn it'],
      ['example', 'See an example'],
      ['practice', 'Practice'],
      ['apply', 'Use the skill']
    ].map((item, itemIndex) => '<li><button type="button" data-scroll-target="lesson-' + item[0] + '"' + (itemIndex === 0 ? ' aria-current="step"' : '') + '><span>' + (itemIndex + 1) + '.</span> ' + item[1] + '</button></li>').join('');

    const activities = lesson.practice.map((question, qIndex) => renderActivity(subjectKey, lesson, question, qIndex)).join('');
    const previous = index > 0 ? subject.lessons[index - 1] : null;
    const next = index < subject.lessons.length - 1 ? subject.lessons[index + 1] : null;
    const lessonKey = subjectKey + ':' + lesson.id;
    const completed = state.completed.includes(lessonKey);
    const correctCount = lesson.practice.filter((q, qIndex) => state.answers[lessonKey + ':' + qIndex] === true).length;
    const allCorrect = correctCount === lesson.practice.length;

    app.innerHTML = '<div class="page-shell">' +
      '<div class="lesson-layout">' +
        '<aside class="lesson-sidebar" aria-label="Lesson sections"><strong>' + escapeHTML(subject.shortTitle) + ' · Lesson ' + (index + 1) + '</strong><ol>' + sidebarItems + '</ol></aside>' +
        '<article class="lesson-main">' +
          '<header class="lesson-header"><span class="eyebrow">' + escapeHTML(subject.title) + ' · ' + escapeHTML(lesson.time) + '</span><h1>' + escapeHTML(lesson.title) + '</h1><p><strong>Goal:</strong> ' + escapeHTML(lesson.objective) + '</p><div class="lesson-progress" aria-label="Four lesson sections"><span class="active"></span><span></span><span></span><span></span></div></header>' +

          '<section class="content-card" id="lesson-learn" tabindex="-1"><span class="eyebrow">1 · Learn it</span><h2>Build the idea</h2>' + lesson.learn +
            '<div class="activity-actions"><button class="button ghost small" type="button" data-open-help>Get Guided Help</button><button class="button ghost small" type="button" data-print>Print Lesson</button></div>' +
          '</section>' +

          '<section class="content-card" id="lesson-example" tabindex="-1"><span class="eyebrow">2 · See an example</span><h2>Follow the thinking</h2>' + lesson.example + '</section>' +

          '<section class="content-card" id="lesson-practice" tabindex="-1"><span class="eyebrow">3 · Practice</span><h2>Try it yourself</h2><p>Feedback appears immediately. Your attempts are private and are not sent to MCC.</p>' + activities +
            '<div class="feedback neutral" id="practice-summary" role="status">' + correctCount + ' of ' + lesson.practice.length + ' practice items completed correctly.</div>' +
          '</section>' +

          '<section class="content-card" id="lesson-apply" tabindex="-1"><span class="eyebrow">4 · Use the skill</span><h2>Connect and reflect</h2>' + lesson.apply +
            (lesson.builder ? renderParagraphBuilder() : renderConfidence(lessonKey)) +
            '<div class="activity-actions">' +
              '<button class="button" id="complete-lesson" type="button" ' + (!allCorrect ? 'disabled aria-describedby="completion-note"' : '') + '>' + (completed ? '✓ Lesson Complete' : 'Mark Lesson Complete') + '</button>' +
              '<button class="button outline" type="button" data-open-help>Get Guided Help</button>' +
            '</div>' +
            '<p id="completion-note" class="status-chip ' + (allCorrect ? 'complete' : '') + '">' + (allCorrect ? 'Practice complete. You can mark this lesson complete.' : 'Complete the practice items to finish this lesson.') + '</p>' +
          '</section>' +

          '<nav class="lesson-nav" aria-label="Lesson navigation">' +
            (previous ? '<a class="button outline" href="' + lessonUrl(subjectKey, previous) + '">← ' + escapeHTML(previous.title) + '</a>' : '<a class="button outline" href="#/' + subjectKey + '">← Unit Overview</a>') +
            (next ? '<a class="button" href="' + lessonUrl(subjectKey, next) + '">' + escapeHTML(next.title) + ' →</a>' : '<a class="button" href="#/progress">View My Progress →</a>') +
          '</nav>' +
        '</article>' +
      '</div>' +
    '</div>';

    restoreSavedFields();
  }

  function renderActivity(subjectKey, lesson, question, qIndex) {
    const questionKey = subjectKey + ':' + lesson.id + ':' + qIndex;
    const solved = state.answers[questionKey] === true;
    const attempts = state.attempts[questionKey] || 0;
    let control = '';
    if (question.type === 'mcq') {
      control = '<div class="choice-list" role="group" aria-label="Answer choices">' + question.options.map((option, index) =>
        '<button class="choice-button" type="button" data-mcq="' + questionKey + '" data-choice="' + index + '">' + escapeHTML(option) + '</button>'
      ).join('') + '</div>';
    } else {
      control = '<div class="answer-row"><div class="field"><label for="answer-' + qIndex + '">Your answer</label><input id="answer-' + qIndex + '" type="text" inputmode="text" autocomplete="off" data-answer-input="' + questionKey + '"></div><button class="button small" type="button" data-check-input="' + questionKey + '">Check Answer</button></div>';
    }
    return '<div class="activity" data-question="' + questionKey + '">' +
      '<h3>Practice ' + (qIndex + 1) + '</h3><p>' + escapeHTML(question.prompt) + '</p>' + control +
      '<div class="feedback ' + (solved ? 'success' : 'neutral') + '" id="feedback-' + cssSafe(questionKey) + '" role="status">' + (solved ? 'Completed correctly.' : (attempts ? 'Try again or open Guided Help.' : 'Choose or enter an answer.')) + '</div>' +
      '<div class="activity-actions"><button class="button ghost small" type="button" data-open-help data-question-index="' + qIndex + '">Get a Hint</button></div>' +
    '</div>';
  }

  function renderConfidence(lessonKey) {
    const saved = state.confidence[lessonKey] || '';
    return '<div class="confidence"><strong>How do you feel about this skill?</strong>' +
      ['ready|Ready to continue','practice|I need more practice','tutor|I want help from a tutor'].map(item => {
        const parts = item.split('|');
        return '<label><input type="radio" name="confidence" value="' + parts[0] + '" data-confidence="' + lessonKey + '"' + (saved === parts[0] ? ' checked' : '') + '> ' + parts[1] + '</label>';
      }).join('') +
    '</div>';
  }

  function renderParagraphBuilder() {
    return '<div class="activity paragraph-builder" id="paragraph-builder">' +
      '<h3>Build your paragraph</h3>' +
      builderField('pb-topic', '1. Topic sentence', 'State the topic and your controlling idea.') +
      builderField('pb-detail1', '2. First supporting detail', 'Add a fact, reason, example, or piece of evidence.') +
      builderField('pb-explain1', '3. Explain the first detail', 'Explain how the detail supports your point.') +
      builderField('pb-detail2', '4. Second supporting detail', 'Add another relevant fact, reason, example, or piece of evidence.') +
      builderField('pb-explain2', '5. Explain the second detail', 'Connect this detail to your controlling idea.') +
      builderField('pb-closing', '6. Closing or transition sentence', 'Provide closure or connect to the next idea.') +
      '<div class="activity-actions"><button class="button" type="button" id="build-paragraph">Build My Paragraph</button><button class="button outline" type="button" id="copy-paragraph">Copy Paragraph</button></div>' +
      '<h3>Paragraph preview</h3><div class="paragraph-preview" id="paragraph-output" aria-live="polite">Your paragraph will appear here.</div>' +
      '<h3>Revision checklist</h3><ul class="checklist">' +
        ['My topic sentence states one focused point.','Every detail supports that point.','I explain why each detail matters.','My ideas appear in a logical order.','My closing sentence provides closure or a transition.','I reread the paragraph for sentence-level errors.'].map((label, i) => '<li><label><input type="checkbox" data-save-field="pb-check-' + i + '"> <span>' + label + '</span></label></li>').join('') +
      '</ul>' +
    '</div>';
  }

  function builderField(id, label, placeholder) {
    return '<div class="field"><label for="' + id + '">' + label + '</label><textarea id="' + id + '" data-save-field="' + id + '" placeholder="' + escapeHTML(placeholder) + '"></textarea></div>';
  }

  function restoreSavedFields() {
    document.querySelectorAll('[data-save-field]').forEach(field => {
      const key = field.dataset.saveField;
      if (field.type === 'checkbox') field.checked = state.fields[key] === true;
      else if (state.fields[key]) field.value = state.fields[key];
    });
  }

  function renderProgress() {
    activeLesson = null;
    setActiveNav('progress');
    const total = totalProgress();
    const math = subjectProgress('math');
    const inrw = subjectProgress('inrw');
    const rows = ['math','inrw'].map(subjectKey => {
      const subject = content[subjectKey];
      return subject.lessons.map(lesson => {
        const complete = state.completed.includes(subjectKey + ':' + lesson.id);
        const confidence = state.confidence[subjectKey + ':' + lesson.id];
        const confidenceLabel = confidence === 'ready' ? 'Ready to continue' : confidence === 'practice' ? 'More practice requested' : confidence === 'tutor' ? 'Tutor requested' : 'Not selected';
        return '<article class="lesson-card"><span class="status-chip ' + (complete ? 'complete' : '') + '">' + (complete ? '✓ Complete' : 'Not completed') + '</span><h3>' + escapeHTML(lesson.title) + '</h3><p>' + escapeHTML(subject.shortTitle) + '<br>Confidence: ' + confidenceLabel + '</p><a class="button small outline" href="' + lessonUrl(subjectKey, lesson) + '">' + (complete ? 'Practice Again' : 'Open Lesson') + '</a></article>';
      }).join('');
    }).join('');

    app.innerHTML = '<div class="page-shell">' +
      '<span class="eyebrow">Saved on this device</span><h1>My Progress</h1><p class="lede">Your progress is stored only in this browser. It is not sent to MCC, your instructor, or another device.</p>' +
      '<div class="progress-summary">' +
        '<div class="stat-card"><span>Overall</span><strong>' + total.done + '/' + total.total + '</strong><div class="mini-progress"><span style="width:' + total.percent + '%"></span></div></div>' +
        '<div class="stat-card"><span>Math</span><strong>' + math.done + '/' + math.total + '</strong><div class="mini-progress"><span style="width:' + math.percent + '%"></span></div></div>' +
        '<div class="stat-card"><span>Reading & Writing</span><strong>' + inrw.done + '/' + inrw.total + '</strong><div class="mini-progress"><span style="width:' + inrw.percent + '%"></span></div></div>' +
      '</div>' +
      '<div class="section-heading"><div><h2>Lesson status</h2></div><button class="button outline small" type="button" id="reset-progress">Reset My Progress</button></div>' +
      '<div class="card-grid">' + rows + '</div>' +
    '</div>';
  }

  function renderTutoring() {
    activeLesson = null;
    setActiveNav('tutoring');
    app.innerHTML = '<div class="page-shell narrow">' +
      '<span class="eyebrow">Real people, real help</span><h1>Meet With a Tutor</h1><p class="lede">Guided practice is useful, but some questions are easier to solve with another person. Free tutoring is available to MCC students.</p>' +
      '<section class="tutor-panel">' +
        '<div><h2>Choose the support that fits</h2><h3>Online through Upswing</h3><p>Use Upswing to look for a tutor by subject. Depending on availability, you can schedule a session or choose “Get Tutored Now.”</p><a class="button" href="https://mclennan.upswing.io/" target="_blank" rel="noopener">Open Upswing <span aria-hidden="true">↗</span></a>' +
        '<h3>In person at MCC</h3><p>Visit Academic Support and Tutoring in the Learning Technology Center. Availability for specialized subjects may depend on tutor schedules.</p><a class="button outline" href="https://www.mclennan.edu/academic-support-and-tutoring/tutor.html" target="_blank" rel="noopener">View MCC Tutoring Information <span aria-hidden="true">↗</span></a></div>' +
        '<aside class="contact-card"><span class="eyebrow">Academic Support & Tutoring</span><h2>Get help now</h2><p><strong>Phone</strong><br><a href="tel:+12542998500">254-299-8500</a></p><p><strong>Email</strong><br><a href="mailto:ast@mclennan.edu">ast@mclennan.edu</a></p><p><strong>Location</strong><br>Learning Technology Center</p></aside>' +
      '</section>' +
      '<section class="content-card"><h2>Having trouble logging into Upswing?</h2><p>Use your MCC student credentials. If you cannot log in, contact the MCC Technology Help Desk at <a href="tel:+12542998077">254-299-8077</a>.</p></section>' +
    '</div>';
  }

  function renderNotFound() {
    activeLesson = null;
    setActiveNav('');
    app.innerHTML = '<div class="page-shell narrow"><span class="eyebrow">Page not found</span><h1>That skill wandered off.</h1><p>Use the homepage to choose a Math or Reading and Writing lesson.</p><a class="button" href="#/home">Return Home</a></div>';
  }

  function normalize(value) {
    return String(value || '').toLowerCase().trim().replace(/\s+/g, ' ');
  }

  function cssSafe(value) {
    return value.replace(/[^a-zA-Z0-9_-]/g, '-');
  }

  function lookupQuestion(questionKey) {
    const parts = questionKey.split(':');
    const found = getLesson(parts[0], parts[1]);
    if (!found) return null;
    return { question: found.lesson.practice[Number(parts[2])], subjectKey: parts[0], lesson: found.lesson, index: Number(parts[2]) };
  }

  function recordAttempt(questionKey, correct) {
    state.attempts[questionKey] = (state.attempts[questionKey] || 0) + 1;
    if (correct) state.answers[questionKey] = true;
    saveState();
  }

  function showFeedback(questionKey, message, kind) {
    const node = document.getElementById('feedback-' + cssSafe(questionKey));
    if (!node) return;
    node.className = 'feedback ' + kind;
    node.textContent = message;
    updatePracticeSummary();
  }

  function updatePracticeSummary() {
    if (!activeLesson) return;
    const lessonKey = activeLesson.subjectKey + ':' + activeLesson.lesson.id;
    const total = activeLesson.lesson.practice.length;
    const correct = activeLesson.lesson.practice.filter((q, index) => state.answers[lessonKey + ':' + index] === true).length;
    const summary = document.getElementById('practice-summary');
    if (summary) {
      summary.textContent = correct + ' of ' + total + ' practice items completed correctly.';
      summary.className = 'feedback ' + (correct === total ? 'success' : 'neutral');
    }
    const completeButton = document.getElementById('complete-lesson');
    const note = document.getElementById('completion-note');
    if (completeButton && correct === total) {
      completeButton.disabled = false;
      completeButton.removeAttribute('aria-describedby');
      note.textContent = 'Practice complete. You can mark this lesson complete.';
      note.className = 'status-chip complete';
    }
  }

  function handleMcq(button) {
    const questionKey = button.dataset.mcq;
    const lookup = lookupQuestion(questionKey);
    if (!lookup) return;
    const choice = Number(button.dataset.choice);
    const correct = choice === lookup.question.correct;
    button.closest('.choice-list').querySelectorAll('.choice-button').forEach(item => {
      item.classList.remove('selected','correct','incorrect');
      if (Number(item.dataset.choice) === lookup.question.correct && correct) item.classList.add('correct');
    });
    button.classList.add(correct ? 'correct' : 'incorrect');
    recordAttempt(questionKey, correct);
    showFeedback(questionKey, correct ? lookup.question.correctFeedback : lookup.question.incorrectFeedback, correct ? 'success' : 'try-again');
  }

  function handleInput(button) {
    const questionKey = button.dataset.checkInput;
    const lookup = lookupQuestion(questionKey);
    const input = document.querySelector('[data-answer-input="' + questionKey + '"]');
    if (!lookup || !input) return;
    const value = normalize(input.value);
    const correct = lookup.question.answer.some(answer => normalize(answer) === value);
    recordAttempt(questionKey, correct);
    if (correct) {
      showFeedback(questionKey, lookup.question.correctFeedback, 'success');
    } else {
      const mapped = lookup.question.incorrectMap && lookup.question.incorrectMap[value];
      showFeedback(questionKey, mapped || lookup.question.genericFeedback, value ? 'try-again' : 'neutral');
    }
  }

  function openHelp(questionIndex) {
    if (!activeLesson) return;
    const lesson = activeLesson.lesson;
    const question = Number.isFinite(questionIndex) ? lesson.practice[questionIndex] : null;
    helpContent.innerHTML = '<p>Choose the kind of help you need. You stay in control of how much is revealed.</p>' +
      (question ? '<div class="callout"><strong>Current practice</strong><p>' + escapeHTML(question.prompt) + '</p></div>' : '') +
      '<div class="help-options">' +
        '<button class="help-option" type="button" data-help-option="start">I don’t know how to start</button>' +
        '<button class="help-option" type="button" data-help-option="term">Explain an important term</button>' +
        '<button class="help-option" type="button" data-help-option="stuck">I’m stuck on a step</button>' +
        '<button class="help-option" type="button" data-help-option="example">Show a similar example</button>' +
        '<button class="help-option" type="button" data-help-option="prerequisite">Review an easier skill</button>' +
      '</div><div id="hint-output" class="hint-level" hidden aria-live="polite"></div>' +
      '<p><a href="#/tutoring" data-close-dialog>I would rather work with a tutor</a></p>';
    if (typeof helpDialog.showModal === 'function') helpDialog.showModal();
    else helpDialog.setAttribute('open','');
  }

  function buildParagraph() {
    const ids = ['pb-topic','pb-detail1','pb-explain1','pb-detail2','pb-explain2','pb-closing'];
    const text = ids.map(id => (document.getElementById(id) || {}).value || '').filter(Boolean).join(' ');
    const output = document.getElementById('paragraph-output');
    output.textContent = text || 'Add ideas to the fields above, then build your paragraph.';
  }

  function route() {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    const parts = routeParts();
    const section = parts[0] || 'home';
    if (section === 'home') renderHome();
    else if (section === 'math' || section === 'inrw') renderSubject(section);
    else if (section === 'lesson') renderLesson(parts[1], parts[2]);
    else if (section === 'progress') renderProgress();
    else if (section === 'tutoring') renderTutoring();
    else renderNotFound();
    window.scrollTo(0, 0);
    requestAnimationFrame(() => app.focus({preventScroll:true}));
  }

  document.addEventListener('click', function (event) {
    const mcq = event.target.closest('[data-mcq]');
    if (mcq) return handleMcq(mcq);
    const inputCheck = event.target.closest('[data-check-input]');
    if (inputCheck) return handleInput(inputCheck);
    const help = event.target.closest('[data-open-help]');
    if (help) return openHelp(Number(help.dataset.questionIndex));
    const helpOption = event.target.closest('[data-help-option]');
    if (helpOption && activeLesson) {
      const output = document.getElementById('hint-output');
      output.hidden = false;
      output.innerHTML = '<strong>' + escapeHTML(helpOption.textContent) + '</strong><p>' + escapeHTML(activeLesson.lesson.help[helpOption.dataset.helpOption]) + '</p>';
      return;
    }
    if (event.target.closest('[data-print]')) return window.print();
    const scrollButton = event.target.closest('[data-scroll-target]');
    if (scrollButton) {
      const target = document.getElementById(scrollButton.dataset.scrollTarget);
      document.querySelectorAll('[data-scroll-target]').forEach(item => item.removeAttribute('aria-current'));
      scrollButton.setAttribute('aria-current', 'step');
      if (target) target.scrollIntoView({behavior:'smooth', block:'start'});
      return;
    }
    if (event.target.closest('[data-close-dialog]') && helpDialog.open) helpDialog.close();
    if (event.target.id === 'close-help') helpDialog.close();
    if (event.target.id === 'topic-jump-button') {
      const target = document.getElementById('topic-jump').value;
      if (target) location.hash = target;
      else document.getElementById('topic-jump').focus();
    }
    if (event.target.id === 'complete-lesson' && activeLesson) {
      const key = activeLesson.subjectKey + ':' + activeLesson.lesson.id;
      if (!state.completed.includes(key)) state.completed.push(key);
      saveState();
      event.target.textContent = '✓ Lesson Complete';
      announcer.textContent = activeLesson.lesson.title + ' marked complete.';
    }
    if (event.target.id === 'reset-progress') {
      if (window.confirm('Reset all lesson progress and saved writing on this device?')) {
        state = Object.assign({}, defaultState, {completed:[],answers:{},attempts:{},fields:{},confidence:{}});
        saveState();
        renderProgress();
        announcer.textContent = 'Progress reset.';
      }
    }
    if (event.target.id === 'build-paragraph') buildParagraph();
    if (event.target.id === 'copy-paragraph') {
      buildParagraph();
      const text = document.getElementById('paragraph-output').textContent;
      if (navigator.clipboard && text && !text.startsWith('Add ideas')) {
        navigator.clipboard.writeText(text).then(() => { announcer.textContent = 'Paragraph copied.'; });
      }
    }
  });

  document.addEventListener('input', function (event) {
    if (!event.target.matches('[data-save-field]')) return;
    const key = event.target.dataset.saveField;
    state.fields[key] = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    saveState();
  });

  document.addEventListener('change', function (event) {
    if (event.target.matches('[data-confidence]')) {
      state.confidence[event.target.dataset.confidence] = event.target.value;
      saveState();
      if (event.target.value === 'tutor') announcer.textContent = 'Tutoring options are available from the Meet With a Tutor page.';
    }
  });

  menuButton.addEventListener('click', function () {
    const open = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
  });

  helpDialog.addEventListener('click', function (event) {
    const rect = helpDialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) helpDialog.close();
  });

  window.addEventListener('hashchange', route);
  route();
}());
