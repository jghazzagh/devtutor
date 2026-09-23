window.SKILLS_CONTENT = {
  math: {
    title: 'Developmental Math',
    shortTitle: 'Math',
    tagline: 'Build confidence with fractions and mixed numbers, one step at a time.',
    symbol: '¾',
    colorClass: 'math',
    lessons: [
      {
        id: 'fraction-foundations',
        title: 'Fraction Foundations',
        summary: 'Review numerators, denominators, equivalent fractions, and simplest form.',
        time: '8–10 minutes',
        objective: 'Identify the parts of a fraction and create equivalent fractions.',
        learn: '<p>A fraction describes part of a whole. The <strong>numerator</strong> is the number above the fraction bar. It tells how many parts you have. The <strong>denominator</strong> is below the fraction bar. It tells how many equal parts make one whole.</p><div class="math-display" aria-label="three fourths"><span class="fraction"><span>3</span><span>4</span></span></div><div class="concept-box"><strong>Equivalent fractions</strong><p>Equivalent fractions name the same amount. Multiply or divide the numerator and denominator by the same nonzero number.</p><p><span class="fraction"><span>1</span><span>2</span></span> = <span class="fraction"><span>2</span><span>4</span></span> = <span class="fraction"><span>4</span><span>8</span></span></p></div><p>A fraction is in <strong>simplest form</strong> when the numerator and denominator share no factor greater than 1.</p>',
        example: '<h3>Reduce 12/18</h3><ol class="steps"><li>Find a common factor. Both 12 and 18 are divisible by 6.</li><li>Divide both numbers by 6: 12 ÷ 6 = 2 and 18 ÷ 6 = 3.</li><li>The simplest form is <strong>2/3</strong>.</li></ol>',
        practice: [
          {type:'mcq', prompt:'In the fraction 7/9, what does the denominator tell you?', options:['You have 7 parts.','One whole is divided into 9 equal parts.','The fraction equals 16.'], correct:1, correctFeedback:'Correct. The denominator tells how many equal parts make one whole.', incorrectFeedback:'Look below the fraction bar. The denominator describes how many equal parts make the whole.'},
          {type:'input', prompt:'Complete the equivalent fraction: 3/5 = ?/20', answer:['12'], correctFeedback:'Correct. Since 5 × 4 = 20, multiply 3 × 4 to get 12.', incorrectMap:{'15':'You may have multiplied the numerator by 5. Use the same factor that changes 5 into 20.'}, genericFeedback:'Ask: what number multiplied by 5 equals 20? Multiply the numerator by that same number.'},
          {type:'mcq', prompt:'Which fraction is 8/12 in simplest form?', options:['4/6','2/3','6/8'], correct:1, correctFeedback:'Correct. Dividing 8 and 12 by 4 produces 2/3.', incorrectFeedback:'Simplest form means the numerator and denominator no longer share a factor greater than 1.'}
        ],
        apply: '<p>You will use equivalent fractions whenever quantities are written with different denominators. This is the foundation for adding and subtracting fractions.</p>',
        help: {start:'Name what the top and bottom numbers mean before performing an operation.', term:'The numerator counts selected parts. The denominator names the number of equal parts in one whole.', stuck:'Try listing the factors of both numbers. Look for the greatest factor they share.', example:'To simplify 10/15, divide the numerator and denominator by 5. The result is 2/3.', prerequisite:'Review multiplication facts and factors before trying another problem.'}
      },
      {
        id: 'mixed-and-improper',
        title: 'Mixed and Improper Fractions',
        summary: 'Convert between mixed numbers and improper fractions.',
        time: '8–10 minutes',
        objective: 'Convert mixed numbers to improper fractions and convert improper fractions to mixed numbers.',
        learn: '<p>A <strong>mixed number</strong> combines a whole number and a proper fraction, such as 2 1/3. An <strong>improper fraction</strong> has a numerator greater than or equal to its denominator, such as 7/3.</p><div class="concept-box"><strong>Mixed number to improper fraction</strong><p>Multiply the whole number by the denominator, add the numerator, and place the result over the original denominator.</p></div><div class="math-display">2 <span class="fraction"><span>1</span><span>3</span></span> = <span class="fraction"><span>(2 × 3) + 1</span><span>3</span></span> = <span class="fraction"><span>7</span><span>3</span></span></div><div class="callout tip"><strong>Reverse the process</strong><p>To change an improper fraction into a mixed number, divide the numerator by the denominator. The quotient is the whole number and the remainder becomes the numerator.</p></div>',
        example: '<h3>Convert 17/5 to a mixed number</h3><ol class="steps"><li>Divide 17 by 5. The quotient is 3 with a remainder of 2.</li><li>Use 3 as the whole number.</li><li>Place the remainder, 2, over the original denominator, 5.</li><li>The answer is <strong>3 2/5</strong>.</li></ol>',
        practice: [
          {type:'input', prompt:'Convert 3 2/5 to an improper fraction. Enter it using a slash.', answer:['17/5'], correctFeedback:'Correct. (3 × 5) + 2 = 17, and the denominator remains 5.', incorrectMap:{'15/5':'You multiplied the whole number and denominator but forgot to add the numerator.','13/5':'Multiply 3 × 5 first, then add 2.'}, genericFeedback:'Multiply the whole number by the denominator, then add the numerator.'},
          {type:'input', prompt:'Convert 11/4 to a mixed number. Use a space, such as 2 1/3.', answer:['2 3/4','2 3 / 4'], correctFeedback:'Correct. 11 ÷ 4 is 2 with a remainder of 3.', incorrectMap:{'2 1/4':'Check the remainder after 4 goes into 11 two times.'}, genericFeedback:'Divide 11 by 4. The quotient is the whole number and the remainder is the new numerator.'},
          {type:'mcq', prompt:'Why does the denominator stay the same when 4 2/7 becomes an improper fraction?', options:['The size of each fractional part has not changed.','Denominators can never change.','The whole number becomes the denominator.'], correct:0, correctFeedback:'Exactly. You are counting more sevenths, but each part is still one seventh.', incorrectFeedback:'Think about the size of the pieces. They remain sevenths even when you count all of them together.'}
        ],
        apply: '<p>Conversions let you use a consistent fraction format before multiplying, dividing, adding, or subtracting mixed numbers.</p>',
        help: {start:'Decide which direction you are converting: mixed to improper, or improper to mixed.', term:'A proper fraction is less than one whole. An improper fraction is at least one whole.', stuck:'For mixed to improper, remember: multiply, add, keep. For improper to mixed, divide and use the remainder.', example:'4 1/6 becomes (4 × 6 + 1)/6, or 25/6.', prerequisite:'Review division with remainders if converting improper fractions feels difficult.'}
      },
      {
        id: 'add-subtract',
        title: 'Add and Subtract Mixed Numbers',
        summary: 'Use common denominators and regroup when needed.',
        time: '10–12 minutes',
        objective: 'Add and subtract mixed numbers accurately using common denominators.',
        learn: '<p>You can add or subtract the whole-number parts and fractional parts separately, but the fractions must have a <strong>common denominator</strong>.</p><ol class="steps"><li>Find a common denominator.</li><li>Rewrite the fractions as equivalent fractions.</li><li>Add or subtract the numerators.</li><li>Combine the whole-number parts.</li><li>Regroup and simplify if needed.</li></ol><div class="callout pause"><strong>Pause before subtracting</strong><p>If the fraction you are subtracting is larger than the starting fraction, borrow one whole and rewrite it as a fraction.</p></div>',
        example: '<h3>Add 2 1/3 + 1 1/4</h3><div class="math-display">2 <span class="fraction"><span>1</span><span>3</span></span> + 1 <span class="fraction"><span>1</span><span>4</span></span></div><ol class="steps"><li>The least common denominator is 12.</li><li>Rewrite 1/3 as 4/12 and 1/4 as 3/12.</li><li>Add: 4/12 + 3/12 = 7/12.</li><li>Add the whole numbers: 2 + 1 = 3.</li><li>The answer is <strong>3 7/12</strong>.</li></ol>',
        practice: [
          {type:'input', prompt:'Add: 1 1/2 + 2 1/4', answer:['3 3/4','3 3 / 4'], correctFeedback:'Correct. Rewrite 1/2 as 2/4, then add 2/4 + 1/4.', incorrectMap:{'3 2/6':'You added the denominators. First rewrite the fractions with a common denominator.','3 2/4':'Recheck the fractional numerators: 2/4 + 1/4.'}, genericFeedback:'Use fourths for both fractions, then add the whole numbers and fractional parts.'},
          {type:'mcq', prompt:'Before subtracting 3 1/5 − 1 4/5, what should you do?', options:['Subtract the denominators.','Borrow one whole from 3 and rewrite it as 5/5.','Change both fractions to tenths.'], correct:1, correctFeedback:'Correct. Then 3 1/5 becomes 2 6/5, which allows you to subtract 4/5.', incorrectFeedback:'Since 1/5 is smaller than 4/5, you need to regroup one whole.'},
          {type:'input', prompt:'Subtract: 4 2/3 − 1 1/6', answer:['3 1/2','3 3/6','3 1 / 2'], correctFeedback:'Correct. 2/3 is 4/6, so 4/6 − 1/6 = 3/6 = 1/2.', incorrectMap:{'3 1/3':'Rewrite 2/3 using sixths before subtracting.'}, genericFeedback:'Use a denominator of 6 for both fractional parts.'}
        ],
        apply: '<p><strong>Scenario:</strong> You have 4 1/2 yards of material and use 1 3/4 yards. Subtraction shows that 2 3/4 yards remain.</p>',
        help: {start:'Check the denominators before adding or subtracting anything.', term:'A common denominator means the fractions are divided into equal-sized parts.', stuck:'Rewrite both fractions using the least common denominator. Then work with the numerators only.', example:'For 1/2 + 1/3, use sixths: 3/6 + 2/6 = 5/6.', prerequisite:'Return to Fraction Foundations to practice equivalent fractions.'}
      },
      {
        id: 'multiply-divide',
        title: 'Multiply and Divide Mixed Numbers',
        summary: 'Convert, multiply or divide, and simplify.',
        time: '10–12 minutes',
        objective: 'Multiply and divide mixed numbers using improper fractions.',
        learn: '<p>Before multiplying or dividing mixed numbers, convert each mixed number to an improper fraction.</p><div class="concept-box"><strong>Multiply</strong><p>Multiply numerator by numerator and denominator by denominator. Simplify before or after multiplying.</p></div><div class="concept-box"><strong>Divide</strong><p>Keep the first fraction, change division to multiplication, and flip the second fraction. This is sometimes called “keep, change, flip.”</p></div><div class="callout tip"><strong>Why flip?</strong><p>Dividing by a fraction is equivalent to multiplying by its reciprocal.</p></div>',
        example: '<h3>Divide 2 1/4 ÷ 1 1/2</h3><ol class="steps"><li>Convert: 2 1/4 = 9/4 and 1 1/2 = 3/2.</li><li>Keep 9/4, change ÷ to ×, and flip 3/2 to 2/3.</li><li>Multiply: 9/4 × 2/3 = 18/12.</li><li>Simplify 18/12 to <strong>1 1/2</strong>.</li></ol>',
        practice: [
          {type:'input', prompt:'Multiply: 1 1/2 × 2', answer:['3','3/1'], correctFeedback:'Correct. 3/2 × 2/1 = 6/2 = 3.', incorrectMap:{'2 1/2':'Multiplication here means two groups of 1 1/2, not adding only one extra whole.'}, genericFeedback:'Convert 1 1/2 to 3/2 and write 2 as 2/1.'},
          {type:'mcq', prompt:'Which expression correctly rewrites 3/4 ÷ 2/5?', options:['3/4 × 2/5','4/3 × 5/2','3/4 × 5/2'], correct:2, correctFeedback:'Correct. Keep the first fraction and multiply by the reciprocal of the second.', incorrectFeedback:'Keep the first fraction. Change division to multiplication. Flip only the second fraction.'},
          {type:'input', prompt:'Divide: 1 1/3 ÷ 2/3', answer:['2','2/1'], correctFeedback:'Correct. 4/3 × 3/2 simplifies to 2.', incorrectMap:{'8/9':'You multiplied without using the reciprocal of the divisor.'}, genericFeedback:'Convert 1 1/3 to 4/3, then multiply by the reciprocal of 2/3.'}
        ],
        apply: '<p>If 1 1/2 cups of rice fills 6 servings, dividing by 6 tells you each serving uses 1/4 cup.</p>',
        help: {start:'Convert every mixed number to an improper fraction first.', term:'A reciprocal flips the numerator and denominator. The reciprocal of 2/3 is 3/2.', stuck:'For division, keep the first fraction, change the sign to multiplication, and flip the second fraction.', example:'1 1/2 × 2 1/3 becomes 3/2 × 7/3. Cancel the 3s to get 7/2, or 3 1/2.', prerequisite:'Review converting mixed numbers before continuing.'}
      },
      {
        id: 'simplify-check',
        title: 'Simplify and Check',
        summary: 'Reduce answers, estimate, and verify whether results make sense.',
        time: '8–10 minutes',
        objective: 'Write fractional answers in simplest form and use estimation to check reasonableness.',
        learn: '<p>A mathematically correct calculation may still need to be simplified. Always check whether the numerator and denominator share a factor.</p><ol class="steps"><li>Reduce the fraction.</li><li>Convert an improper fraction to a mixed number when appropriate.</li><li>Estimate the original problem.</li><li>Compare the exact answer with the estimate.</li></ol><div class="callout tip"><strong>Reasonableness check</strong><p>2 7/8 is close to 3, and 1 1/10 is close to 1. Their sum should be close to 4.</p></div>',
        example: '<h3>Check 2 7/8 + 1 1/10 = 3 39/40</h3><p>The exact answer is already simplified. Estimating 3 + 1 gives about 4, and 3 39/40 is very close to 4. The result is reasonable.</p>',
        practice: [
          {type:'mcq', prompt:'Which answer is fully simplified?', options:['6/9','10/15','2/3'], correct:2, correctFeedback:'Correct. Two and three share no factor greater than 1.', incorrectFeedback:'Check whether the numerator and denominator still share a factor.'},
          {type:'input', prompt:'Write 14/6 as a simplified mixed number.', answer:['2 1/3','2 1 / 3'], correctFeedback:'Correct. 14/6 simplifies to 7/3, which is 2 1/3.', incorrectMap:{'2 2/6':'Your value is correct, but 2/6 can still be simplified.'}, genericFeedback:'First divide 14 and 6 by 2. Then convert the improper fraction.'},
          {type:'mcq', prompt:'Which is the best estimate for 5 3/4 − 2 1/8?', options:['About 2','About 4','About 8'], correct:1, correctFeedback:'Correct. The numbers are close to 6 and 2, so the difference is about 4.', incorrectFeedback:'Round each mixed number to a nearby whole number before subtracting.'}
        ],
        apply: '<p>Estimation helps catch calculator-entry errors and misplaced operations before they become final answers.</p>',
        help: {start:'Ask two questions: can the fraction be reduced, and is the answer close to what I estimated?', term:'Simplest form means the numerator and denominator have no common factor greater than 1.', stuck:'List the factors of the numerator and denominator and divide by their greatest common factor.', example:'18/12 reduces to 3/2, which is 1 1/2.', prerequisite:'Review factors and division with remainders.'}
      },
      {
        id: 'real-situations',
        title: 'Mixed Numbers in Real Situations',
        summary: 'Translate measurement and quantity problems into operations.',
        time: '10–12 minutes',
        objective: 'Select and use an operation to solve a mixed-number word problem.',
        learn: '<p>Word problems become easier when you separate the story from the mathematical structure.</p><ol class="steps"><li><strong>Identify the question.</strong> What must you find?</li><li><strong>List the known quantities.</strong> Include units.</li><li><strong>Choose an operation.</strong> Combine, compare, find groups, or find the size of each group.</li><li><strong>Estimate.</strong> Predict the approximate answer.</li><li><strong>Solve and label.</strong> Include the correct unit.</li></ol><div class="concept-box"><strong>Operation clues</strong><p><em>Total or combined</em> often suggests addition. <em>How much remains or the difference</em> suggests subtraction. <em>Several equal groups</em> suggests multiplication. <em>How many groups or how much per group</em> suggests division.</p></div>',
        example: '<h3>Material for shelves</h3><p>One shelf needs 2 1/4 feet of trim. How much trim is needed for four shelves?</p><p>This is four equal groups, so multiply: 2 1/4 × 4 = 9 feet.</p>',
        practice: [
          {type:'mcq', prompt:'A container holds 5 1/2 gallons. After 2 3/4 gallons are used, how much remains. Which operation is needed?', options:['Addition','Subtraction','Multiplication'], correct:1, correctFeedback:'Correct. “Remains” asks you to subtract the amount used from the starting amount.', incorrectFeedback:'The problem starts with an amount and removes part of it.'},
          {type:'input', prompt:'You walk 1 1/2 miles in the morning and 2 1/4 miles in the evening. How many miles total?', answer:['3 3/4','3 3 / 4','3.75'], correctFeedback:'Correct. The combined distance is 3 3/4 miles.', incorrectMap:{'3 2/6':'Do not add denominators. Rewrite 1/2 as 2/4 first.'}, genericFeedback:'This asks for a combined total. Rewrite both fractions using fourths.'},
          {type:'mcq', prompt:'A 6-foot board is cut into pieces that are each 1 1/2 feet long. What operation finds the number of pieces?', options:['6 + 1 1/2','6 − 1 1/2','6 ÷ 1 1/2'], correct:2, correctFeedback:'Correct. You are finding how many 1 1/2-foot groups fit into 6 feet.', incorrectFeedback:'The question asks how many equal-sized groups fit inside the total.'}
        ],
        apply: '<p>Before calculating, write a one-sentence plan: “I will ___ because the problem asks me to ___.” This prevents many operation errors.</p>',
        help: {start:'Ignore the numbers for a moment and say what the problem asks you to find.', term:'The unit is the label attached to a measurement, such as feet, cups, or hours.', stuck:'Draw a quick picture or write a sentence describing whether quantities are combined, removed, repeated, or separated into groups.', example:'Three boards at 1 1/2 feet each means 3 × 1 1/2, because the same length repeats three times.', prerequisite:'Review the lesson for the operation you selected before calculating.'}
      },
      {
        id: 'math-review',
        title: 'Unit Practice and Review',
        summary: 'Combine conversions, operations, simplification, and reasoning.',
        time: '12–15 minutes',
        objective: 'Demonstrate the major skills from the fractions and mixed-numbers unit.',
        learn: '<p>This review mixes the skills from the unit. Use scratch paper, estimate before calculating, and open Guided Help only when you need it.</p><div class="callout pause"><strong>Before you begin</strong><p>This is practice, not a grade. Mistakes help identify the lesson you should revisit.</p></div>',
        example: '<h3>A reliable problem-solving routine</h3><ol class="steps"><li>Name the skill or operation.</li><li>Convert mixed numbers if needed.</li><li>Show one step at a time.</li><li>Simplify the result.</li><li>Estimate to check the answer.</li></ol>',
        practice: [
          {type:'input', prompt:'Convert 4 3/8 to an improper fraction.', answer:['35/8'], correctFeedback:'Correct. (4 × 8) + 3 = 35.', incorrectMap:{'32/8':'Remember to add the numerator after multiplying.'}, genericFeedback:'Multiply 4 × 8, add 3, and keep the denominator 8.'},
          {type:'input', prompt:'Add: 2 2/3 + 1 3/4', answer:['4 5/12','4 5 / 12'], correctFeedback:'Correct. Using twelfths gives 8/12 + 9/12 = 17/12, which requires regrouping.', incorrectMap:{'3 5/7':'Do not add denominators. Use a common denominator of 12.','3 17/12':'Your fraction work is correct. Regroup 17/12 into 1 5/12.'}, genericFeedback:'Use a denominator of 12, then regroup if the fraction is greater than one.'},
          {type:'input', prompt:'Multiply: 2 1/2 × 1 1/5', answer:['3','3/1'], correctFeedback:'Correct. 5/2 × 6/5 simplifies to 3.', incorrectMap:{'2 1/10':'Convert both mixed numbers to improper fractions before multiplying.'}, genericFeedback:'Rewrite the problem as 5/2 × 6/5 and simplify.'},
          {type:'mcq', prompt:'Which answer is most reasonable for 7 7/8 ÷ 2?', options:['About 1','About 4','About 16'], correct:1, correctFeedback:'Correct. Eight divided by two is about four.', incorrectFeedback:'Round 7 7/8 to 8, then divide by 2.'}
        ],
        apply: '<p>Complete the confidence check below. Your selection helps the site recommend whether to continue, repeat practice, or connect with a tutor.</p>',
        help: {start:'Identify whether the question asks for conversion, addition, subtraction, multiplication, or division.', term:'Review questions combine multiple skills rather than introducing a new rule.', stuck:'Return to the specific lesson connected to the problem, then try a new version.', example:'A mixed operation problem becomes manageable when each conversion and calculation is written on its own line.', prerequisite:'Use the Math unit page to revisit any lesson marked for review.'}
      }
    ]
  },
  inrw: {
    title: 'Integrated Reading & Writing',
    shortTitle: 'Reading & Writing',
    tagline: 'Read closely and build focused academic paragraphs.',
    symbol: '¶',
    colorClass: 'inrw',
    lessons: [
      {
        id: 'paragraph-anatomy',
        title: 'Anatomy of a Paragraph',
        summary: 'See how topic sentences, details, explanations, and closing sentences work together.',
        time: '8–10 minutes',
        objective: 'Identify the purpose of each major part of an academic paragraph.',
        learn: '<p>An effective academic paragraph develops one focused idea. Each sentence has a job.</p><ul><li><strong>Topic sentence:</strong> states the paragraph’s controlling idea.</li><li><strong>Supporting detail:</strong> provides evidence, facts, examples, or reasons.</li><li><strong>Explanation:</strong> shows how a detail supports the main point.</li><li><strong>Closing or transition:</strong> provides closure or connects to the next idea.</li></ul><div class="callout tip"><strong>Think of a paragraph as a team</strong><p>Every sentence should contribute to the same goal. A sentence may be interesting and still not belong.</p></div>',
        example: '<h3>See the parts</h3><div class="paragraph-preview"><span class="sentence topic">A consistent sleep schedule can improve a college student’s academic performance.</span> <span class="sentence detail">Students who sleep at regular times are more likely to arrive in class alert and ready to participate.</span> <span class="sentence explanation">Being alert makes it easier to take useful notes and understand new material.</span> <span class="sentence detail">Regular sleep can also improve memory.</span> <span class="sentence closing">For these reasons, protecting a regular sleep schedule can be an important study strategy.</span></div><div class="legend"><span>Topic</span><span class="detail">Detail</span><span class="explanation">Explanation</span><span class="closing">Closing</span></div>',
        practice: [
          {type:'mcq', prompt:'Which sentence is most likely a topic sentence?', options:['For example, the library stays open late during finals.','Campus resources can help students manage the demands of college.','This service is located in the Learning Technology Center.'], correct:1, correctFeedback:'Correct. It introduces a broad point that the paragraph can develop.', incorrectFeedback:'A topic sentence should state the main point, not begin with a specific example or isolated detail.'},
          {type:'mcq', prompt:'What is the main job of an explanation sentence?', options:['Introduce an unrelated topic.','Show how evidence supports the paragraph’s point.','Repeat the topic sentence word for word.'], correct:1, correctFeedback:'Correct. Explanation connects the evidence to the main idea.', incorrectFeedback:'Evidence does not always speak for itself. Explanation tells readers why it matters.'},
          {type:'mcq', prompt:'A paragraph about affordable transportation includes a sentence about a student’s favorite movie. What should the writer do?', options:['Keep it because it is interesting.','Move it to the topic sentence.','Remove it because it does not support the paragraph’s focus.'], correct:2, correctFeedback:'Correct. Paragraph unity requires every sentence to support the controlling idea.', incorrectFeedback:'Ask whether the sentence helps prove or explain the paragraph’s main point.'}
        ],
        apply: '<p>When reading, label the job performed by each sentence. When writing, check that every sentence has a clear purpose.</p>',
        help: {start:'First identify the one idea the paragraph develops.', term:'The controlling idea is the specific point the writer makes about the topic.', stuck:'Ask what would be missing if the sentence were removed: the main point, evidence, explanation, or closure?', example:'“Exercise can reduce stress” is a topic sentence. A statistic about exercise and stress is evidence. A sentence interpreting the statistic is explanation.', prerequisite:'Start with the difference between a general point and a specific example.'}
      },
      {
        id: 'topic-sentences',
        title: 'Focused Topic Sentences',
        summary: 'Write topic sentences with a clear topic and controlling idea.',
        time: '8–10 minutes',
        objective: 'Distinguish focused topic sentences from statements that are too broad, too narrow, or incomplete.',
        learn: '<p>A topic sentence usually names the <strong>topic</strong> and expresses a <strong>controlling idea</strong>, or the specific point the paragraph will make about that topic.</p><div class="concept-box"><strong>Topic + controlling idea</strong><p><em>Online office hours</em> + <em>make it easier for working students to ask questions</em>.</p><p><strong>Complete sentence:</strong> Online office hours make it easier for working students to ask questions.</p></div><p>A useful topic sentence is focused enough for one paragraph but broad enough to support with several details.</p>',
        example: '<h3>Compare the choices</h3><p><strong>Too broad:</strong> Technology affects education.</p><p><strong>Too narrow:</strong> My instructor posted one video on Tuesday.</p><p><strong>Focused:</strong> Short instructional videos can help students review difficult course concepts.</p>',
        practice: [
          {type:'mcq', prompt:'Which is the strongest topic sentence for one paragraph?', options:['Food is important.','Preparing meals at home can help college students reduce weekly expenses.','I cooked rice on Monday.'], correct:1, correctFeedback:'Correct. It has a clear topic and a focused point that several details could support.', incorrectFeedback:'Look for a sentence that is focused but can still be developed with several supporting details.'},
          {type:'mcq', prompt:'What is the controlling idea in “Group study can improve learning when every member arrives prepared”?', options:['Group study','Can improve learning when every member arrives prepared','Every member'], correct:1, correctFeedback:'Correct. That portion states the writer’s specific point about group study.', incorrectFeedback:'The topic is “group study.” The controlling idea tells what the writer claims about it.'},
          {type:'mcq', prompt:'Which problem affects “College has many things”?', options:['It is too broad and vague.','It is too specific to develop.','It provides too much evidence.'], correct:0, correctFeedback:'Correct. The sentence does not identify which aspect of college the paragraph will discuss.', incorrectFeedback:'Ask whether a reader could predict the paragraph’s focus from this sentence.'}
        ],
        apply: '<div class="field"><label for="topic-draft">Draft a topic sentence</label><textarea id="topic-draft" data-save-field="topic-draft" placeholder="Write a topic sentence about a strategy that helps college students succeed."></textarea></div><div class="callout tip"><strong>Self-check</strong><p>Underline the topic once. Circle the controlling idea. If you cannot find both, revise the sentence.</p></div>',
        help: {start:'Name your topic, then finish this sentence: “The point I want to make about it is…”', term:'The controlling idea limits the topic and tells readers what the paragraph will explain or support.', stuck:'Try the frame: “[Topic] helps or affects [who] by [specific result].”', example:'Topic: tutoring. Controlling idea: builds confidence through guided practice. Topic sentence: “Tutoring builds confidence by giving students guided practice.”', prerequisite:'Review paragraph anatomy to see how a topic sentence controls the supporting details.'}
      },
      {
        id: 'supporting-details',
        title: 'Supporting Details and Unity',
        summary: 'Choose relevant evidence, examples, reasons, and explanations.',
        time: '9–11 minutes',
        objective: 'Select supporting details that directly develop a topic sentence.',
        learn: '<p>Supporting sentences should answer questions a reader might ask about the topic sentence: <em>Why is this true? How does it work? What is an example? What evidence supports it?</em></p><p>Paragraph <strong>unity</strong> means every sentence supports the same controlling idea.</p><div class="callout pause"><strong>Interesting is not the same as relevant</strong><p>A detail belongs only if it helps develop the paragraph’s specific point.</p></div>',
        example: '<h3>Topic sentence</h3><p><strong>Keeping a weekly calendar can reduce stress for college students.</strong></p><ul><li><strong>Relevant:</strong> A calendar lets students see overlapping deadlines before they become emergencies.</li><li><strong>Relevant:</strong> Scheduling study time breaks large assignments into manageable parts.</li><li><strong>Not relevant:</strong> Some calendars include pictures of national parks.</li></ul>',
        practice: [
          {type:'mcq', prompt:'Topic sentence: “Taking notes by hand can improve attention during lectures.” Which detail best supports it?', options:['Many notebooks come in several colors.','Writing key ideas requires students to actively decide what information matters.','Some lectures are held in large classrooms.'], correct:1, correctFeedback:'Correct. It explains how handwritten notes may improve attention.', incorrectFeedback:'Choose the detail that directly explains the connection between handwriting and attention.'},
          {type:'mcq', prompt:'Topic sentence: “Public transportation can lower a student’s commuting costs.” Which sentence does not belong?', options:['Bus passes may cost less than weekly fuel.','Students can also avoid some parking fees.','Morning classes often begin before 9:00 a.m.'], correct:2, correctFeedback:'Correct. Class start time does not develop the point about commuting cost.', incorrectFeedback:'Ask which detail fails to discuss transportation expenses.'},
          {type:'mcq', prompt:'After presenting a statistic, what should a writer often add?', options:['An explanation of how it supports the point','A completely new topic','The same statistic written again'], correct:0, correctFeedback:'Correct. Explanation helps readers understand why the evidence matters.', incorrectFeedback:'Readers need a connection between the evidence and the paragraph’s claim.'}
        ],
        apply: '<p>Review a paragraph from your own work. Write the topic sentence at the top of a page. Under it, list each supporting sentence. If a sentence does not clearly connect, revise or remove it.</p>',
        help: {start:'Read the topic sentence, then ask whether the detail helps prove or explain that exact point.', term:'Unity means that every sentence contributes to one controlling idea.', stuck:'Complete this frame: “This detail supports the topic sentence because…” If you cannot finish it, the detail may not belong.', example:'If the topic sentence claims exercise improves concentration, a detail about improved blood flow may support it. A detail about shoe prices probably does not.', prerequisite:'Return to Focused Topic Sentences and identify the paragraph’s controlling idea.'}
      },
      {
        id: 'explain-evidence',
        title: 'Explain Your Evidence',
        summary: 'Connect facts and examples to the point you want readers to understand.',
        time: '8–10 minutes',
        objective: 'Write explanation sentences that interpret evidence rather than merely repeat it.',
        learn: '<p>Evidence answers “What supports this claim?” Explanation answers “Why does that evidence matter?” Strong academic writing often follows this pattern:</p><div class="math-display" style="font-family:inherit">Point → Evidence → Explanation</div><p>Explanation may identify a consequence, show a relationship, clarify significance, or connect the evidence back to the controlling idea.</p>',
        example: '<h3>Evidence with explanation</h3><p><strong>Point:</strong> Breaking an assignment into smaller tasks can make it more manageable.</p><p><strong>Evidence:</strong> A student might schedule research on Monday, outlining on Tuesday, and drafting on Wednesday.</p><p><strong>Explanation:</strong> Dividing the work prevents the student from facing every part of the assignment at once and creates several achievable deadlines.</p>',
        practice: [
          {type:'mcq', prompt:'Evidence: “The tutoring center offers both online and in-person appointments.” Which sentence best explains why this matters?', options:['The center is located on campus.','These options allow students to choose support that fits their location and schedule.','Appointments involve tutors.'], correct:1, correctFeedback:'Correct. It interprets the evidence and connects the options to student access.', incorrectFeedback:'An explanation should show the significance of having both formats.'},
          {type:'mcq', prompt:'Which phrase is most useful for beginning an explanation?', options:['This matters because…','On a completely different note…','The quotation says…'], correct:0, correctFeedback:'Correct. It prompts the writer to interpret the evidence.', incorrectFeedback:'Choose the phrase that leads directly to the importance or meaning of the evidence.'},
          {type:'mcq', prompt:'What is wrong with this pair? Evidence: “The library is open late.” Explanation: “The library has late hours.”', options:['The explanation only repeats the evidence.','The evidence is too long.','The two sentences discuss different topics.'], correct:0, correctFeedback:'Correct. The writer still needs to explain why late hours are useful or significant.', incorrectFeedback:'Compare the meaning of the two sentences. Has any new interpretation been added?'}
        ],
        apply: '<div class="field"><label for="evidence-draft">Practice explaining evidence</label><textarea id="evidence-draft" data-save-field="evidence-draft" placeholder="Evidence: Students can meet with an Upswing tutor online.&#10;&#10;This matters because..."></textarea></div>',
        help: {start:'After the evidence, ask “So what?” or “Why should my reader care?”', term:'Explanation interprets evidence and connects it to the paragraph’s point.', stuck:'Try one of these frames: “This shows that…,” “This matters because…,” or “As a result…”', example:'Evidence: A calendar displays every due date. Explanation: Seeing deadlines together helps students decide which task needs attention first.', prerequisite:'Review Supporting Details and Unity to make sure the evidence fits the topic sentence.'}
      },
      {
        id: 'organization-transitions',
        title: 'Organization and Transitions',
        summary: 'Arrange ideas logically and show how they connect.',
        time: '9–11 minutes',
        objective: 'Choose an organizational pattern and transitions that accurately show relationships.',
        learn: '<p>Readers understand a paragraph more easily when ideas follow a recognizable order. Common patterns include chronological order, spatial order, order of importance, comparison and contrast, and cause and effect.</p><p><strong>Transitions</strong> identify relationships between ideas.</p><div class="concept-box"><ul><li><strong>Addition:</strong> also, furthermore, in addition</li><li><strong>Contrast:</strong> however, in contrast, although</li><li><strong>Result:</strong> therefore, as a result, consequently</li><li><strong>Example:</strong> for example, specifically, for instance</li><li><strong>Sequence:</strong> first, next, finally</li></ul></div>',
        example: '<h3>Choose the relationship</h3><p>“The student studied for several days. <strong>As a result</strong>, she felt prepared for the exam.”</p><p><em>As a result</em> works because the second sentence describes a consequence of the first.</p>',
        practice: [
          {type:'mcq', prompt:'“The course is challenging. _____, weekly tutoring can make the material more manageable.”', options:['However','For example','First'], correct:0, correctFeedback:'Correct. “However” shows a contrast between the challenge and the available support.', incorrectFeedback:'The second sentence introduces a contrasting, more positive idea.'},
          {type:'mcq', prompt:'Which transition signals that another similar point is coming?', options:['In contrast','In addition','As a result'], correct:1, correctFeedback:'Correct. “In addition” adds information of the same general type.', incorrectFeedback:'Look for a transition that adds rather than contrasts or shows a result.'},
          {type:'mcq', prompt:'A paragraph explains how to register for classes. Which organization is most useful?', options:['Chronological sequence','Order of importance','Compare and contrast'], correct:0, correctFeedback:'Correct. A process is usually clearest when steps appear in the order they occur.', incorrectFeedback:'Registration consists of actions that must occur in a particular sequence.'}
        ],
        apply: '<p>Circle every transition in one of your paragraphs. In the margin, label the relationship it claims to show. Replace any transition that gives readers the wrong signal.</p>',
        help: {start:'Decide how the second idea relates to the first: addition, contrast, result, example, or sequence.', term:'A transition is a word or phrase that signals the relationship between ideas.', stuck:'Say the relationship aloud before choosing the transition. Do not select a transition only because it sounds formal.', example:'“The bus was delayed. Consequently, Maya arrived late.” The transition shows cause and result.', prerequisite:'Review paragraph anatomy and identify the job of each sentence before arranging them.'}
      },
      {
        id: 'revise-paragraph',
        title: 'Revise a Weak Paragraph',
        summary: 'Improve focus, development, organization, and clarity.',
        time: '10–12 minutes',
        objective: 'Use a focused revision process to strengthen an academic paragraph.',
        learn: '<p><strong>Revision</strong> improves ideas, focus, support, and organization. <strong>Editing</strong> corrects sentences, grammar, punctuation, and spelling. Revise first so you do not spend time polishing sentences that may be removed.</p><ol class="steps"><li>Identify the paragraph’s controlling idea.</li><li>Remove or revise unrelated information.</li><li>Add missing evidence or explanation.</li><li>Reorder ideas logically.</li><li>Improve transitions.</li><li>Edit sentences after the ideas work.</li></ol>',
        example: '<h3>Before</h3><p class="paragraph-preview">College students are busy. Calendars come in paper and electronic forms. My favorite app has a blue icon. A calendar can show when assignments are due. It can also remind students about work shifts. Calendars are helpful.</p><h3>Revision priorities</h3><ul><li>Replace the vague topic sentence with a focused claim.</li><li>Remove the sentence about the blue icon.</li><li>Explain how seeing assignments and work shifts reduces scheduling conflicts.</li><li>Strengthen the closing sentence.</li></ul>',
        practice: [
          {type:'mcq', prompt:'What should a writer usually examine first during revision?', options:['Comma placement','The paragraph’s controlling idea and support','The font used for the title'], correct:1, correctFeedback:'Correct. Revision begins with meaning, focus, and development.', incorrectFeedback:'Start with the largest issues. Sentence-level editing comes after the paragraph’s ideas work.'},
          {type:'mcq', prompt:'A paragraph has strong evidence but never explains it. What revision is most needed?', options:['Add interpretation connecting the evidence to the point.','Replace every transition.','Change the paragraph to a list.'], correct:0, correctFeedback:'Correct. The writer needs to show readers how the evidence supports the claim.', incorrectFeedback:'The missing element is the connection between the evidence and the paragraph’s point.'},
          {type:'mcq', prompt:'When should a writer correct spelling and punctuation?', options:['Only before choosing a topic','After major changes to focus and organization','Instead of revising ideas'], correct:1, correctFeedback:'Correct. Edit after the content and structure are stable.', incorrectFeedback:'Correcting a sentence is wasted effort if revision later removes that sentence.'}
        ],
        apply: '<p>Use the checklist in the final lesson to revise a paragraph of your own. Make one pass for ideas and a second pass for sentence-level editing.</p>',
        help: {start:'Read only the topic sentence and the first few words of each supporting sentence. Do they all point in the same direction?', term:'Revision changes what a paragraph says and how it develops ideas. Editing corrects how sentences are written.', stuck:'Choose one revision goal at a time: focus, support, explanation, order, transitions, then editing.', example:'Removing an unrelated sentence is revision. Correcting a missing comma is editing.', prerequisite:'Review Supporting Details and Explain Your Evidence before revising.'}
      },
      {
        id: 'paragraph-builder',
        title: 'Guided Paragraph Builder',
        summary: 'Plan, draft, review, and copy a complete academic paragraph.',
        time: '12–15 minutes',
        objective: 'Draft a unified paragraph containing a focused topic sentence, support, explanation, and closure.',
        learn: '<p>Use the builder below to create one paragraph in manageable parts. Your writing stays in this browser. The site provides a structure and checklist, but it does not grade your ideas.</p><div class="callout pause"><strong>Bring an assignment if you have one</strong><p>If your instructor provided directions, use those requirements first. This builder is general practice.</p></div>',
        example: '<h3>Planning before drafting</h3><p>Choose one focused point. Then collect two relevant details and explain how each supports that point. Planning prevents the paragraph from becoming a wandering little sentence parade.</p>',
        practice: [
          {type:'mcq', prompt:'Before drafting supporting sentences, what should be clear?', options:['The final font','The paragraph’s controlling idea','The exact number of commas'], correct:1, correctFeedback:'Correct. The controlling idea determines which details belong.', incorrectFeedback:'Supporting sentences need a clear point to develop.'},
          {type:'mcq', prompt:'Which draft plan is most complete?', options:['Topic only','Topic sentence, two details, explanations, and a closing connection','Several unrelated facts'], correct:1, correctFeedback:'Correct. That plan includes the major roles needed for development and unity.', incorrectFeedback:'Look for a plan that includes both support and explanation.'}
        ],
        builder: true,
        apply: '<p>After building your paragraph, read it aloud. Listening can reveal missing words, abrupt transitions, and sentences that are trying to do too much.</p>',
        help: {start:'Begin with one sentence stating the topic and the specific point you want readers to understand.', term:'A draft is a working version. It is expected to change during revision.', stuck:'Complete one field at a time. Do not worry about perfect wording until every part has an idea.', example:'Topic sentence: “A weekly planning routine can help college students avoid missed deadlines.” Every later sentence should develop that point.', prerequisite:'Return to any earlier INRW lesson connected to the part that feels difficult.'}
      }
    ]
  }
};
