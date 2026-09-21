
# Article opening rewrites — run from tinokatsande-site folder
$articlesDir = "content\articles"

# Helper function
function ReplaceOpening($slug, $newOpening) {
    $file = "$articlesDir\$slug.md"
    if (-not (Test-Path $file)) { Write-Host "NOT FOUND: $file"; return }
    $content = Get-Content $file -Raw -Encoding UTF8
    
    # Find the end of frontmatter (second ---)
    $fmEnd = $content.IndexOf("---", 3)
    if ($fmEnd -lt 0) { Write-Host "No frontmatter found: $slug"; return }
    $afterFrontmatter = $content.Substring($fmEnd + 3).TrimStart()
    
    # Find where the first H2 heading starts (## )
    $h2Index = $afterFrontmatter.IndexOf("`n## ")
    if ($h2Index -lt 0) { $h2Index = $afterFrontmatter.IndexOf("`r`n## ") }
    if ($h2Index -lt 0) { Write-Host "No H2 found: $slug"; return }
    
    # Get everything from first H2 onwards
    $restOfArticle = $afterFrontmatter.Substring($h2Index)
    
    # Rebuild: new frontmatter + new opening + rest of article
    $newContent = $newOpening.TrimEnd() + "`n`n" + $restOfArticle.TrimStart()
    [System.IO.File]::WriteAllText((Resolve-Path $file), $newContent, [System.Text.Encoding]::UTF8)
    Write-Host "Updated: $slug"
}

# HYPERTENSION
ReplaceOpening "hypertension-african-patients" @"
---
title: "High Blood Pressure in African and Black Patients — Why It's Different and What to Do About It"
excerpt: "Black and African patients develop hypertension earlier, more severely, and with different responses to medication than other groups. Here's what the evidence says — and what your doctor may not have had time to explain."
category: "chronic-conditions"
categoryLabel: "Chronic Conditions"
date: "2025-06-01"
lastUpdated: "June 2025"
readTime: 14
tags: ["Hypertension", "High Blood Pressure", "Black Health", "Cardiovascular", "Africa"]
heroImage: "/images/hypertension.webp"
published: true
---

My most memorable hypertension consultation was not dramatic. A 52-year-old accountant sat across from me — fit, nonsmoker, controlled diet, no family history he knew of — and his blood pressure reading was 178/104. He had come in for a completely different reason. He felt fine.

That is the thing about high blood pressure in Black and African patients that keeps me up at night as a clinician. It arrives quietly, parks itself in the body for years, does its damage in silence, and by the time someone notices — because of a stroke, a heart attack, failing kidneys — the conversation we should have had a decade earlier is long overdue.

The blood pressure disparity affecting Black and African adults is not subtle. It is stark, consistent, and well-documented across decades of research on both sides of the Atlantic. Black adults develop hypertension approximately **10 years earlier** than white adults on average. The condition is more severe at diagnosis. The downstream consequences — stroke, heart failure, kidney disease — occur at higher rates and at younger ages.

And yet. The treatment most commonly prescribed first does not work as well in Black patients. This is not a secret buried in specialist journals. It is in the NICE guidelines that every UK GP has access to. It just does not always make it to the consultation room.

<div class="callout callout--info">
  <span class="callout__icon">ℹ️</span>
  <div><div class="callout__title">The numbers that matter</div>Blood pressure is measured in two numbers: systolic (top number, when your heart beats) and diastolic (bottom number, between beats). Normal is below 120/80 mmHg. Hypertension is diagnosed at 140/90 mmHg or above in most guidelines.</div>
</div>
"@

# TYPE 2 DIABETES
ReplaceOpening "type-2-diabetes-african-communities" @"
---
title: "Type 2 Diabetes in African Communities — The Facts, the Risks, and the Things You Can Actually Control"
excerpt: "People of African origin are 2–4 times more likely to develop type 2 diabetes than white Europeans. But the condition is far more manageable than most people think. Here's the honest guide."
category: "chronic-conditions"
categoryLabel: "Chronic Conditions"
date: "2025-06-03"
lastUpdated: "June 2025"
readTime: 13
tags: ["Diabetes", "Type 2 Diabetes", "Black Health", "Chronic Conditions", "Africa"]
heroImage: "/images/diabetes.webp"
published: true
---

Three words that change everything. That is what a type 2 diabetes diagnosis feels like in the room. I have watched faces crumple. I have seen people sit very still. I have heard: "Does this mean I am going to lose a leg?"

The fear makes sense. Diabetes has a reputation — and some of that reputation is earned. But here is what I try to convey in the minutes after delivering that diagnosis: the people who lose limbs, who go blind, who end up on dialysis — they are almost always people whose diabetes went undetected for years, or was poorly managed, or was managed without adequate support. The condition itself, caught early and treated properly, is among the most controllable chronic diseases in medicine.

People with well-managed diabetes live long, full, ordinary lives. That is the truth the fear tends to drown out.

What does deserve frank discussion is why people of African heritage are being diagnosed at 2–4 times the rate of white Europeans — and what that means for screening, treatment, and daily management.

<div class="callout callout--info">
  <span class="callout__icon">ℹ️</span>
  <div><div class="callout__title">Type 1 vs Type 2 — a critical distinction</div>Type 2 diabetes involves insulin resistance — the body produces insulin but cannot use it effectively. Type 1 is an autoimmune condition where the pancreas produces no insulin. This guide covers type 2. They are different diseases requiring different management.</div>
</div>
"@

# ANXIETY
ReplaceOpening "anxiety-explained" @"
---
title: "Anxiety — What It Actually Is, Why It Happens, and What Actually Helps"
excerpt: "Anxiety is not weakness, overthinking, or something to just push through. It is a physiological response with specific causes and specific treatments. Here is the honest clinical picture."
category: "mental-health"
categoryLabel: "Mental Health"
date: "2025-06-05"
lastUpdated: "June 2025"
readTime: 12
tags: ["Anxiety", "Mental Health", "Anxiety Disorder", "CBT", "African Mental Health"]
heroImage: "/images/anxiety.webp"
published: true
---

Nobody has ever come to me and said "I think I have an anxiety disorder." They come because they cannot sleep. Because their heart races on the Tube for no reason. Because they have avoided their email inbox for three days and cannot explain why. Because they had to leave a supermarket in a hurry, convinced something was wrong with their heart, and felt embarrassed about it for a week afterwards.

Anxiety disguises itself. It calls itself stress, overthinking, being sensitive, not coping well. In African and Caribbean communities specifically, it often gets labelled as laziness or lack of faith — and those labels are far more damaging than the condition itself, because they replace a medical explanation with a moral one.

Here is the medical explanation, plainly: anxiety is your nervous system behaving in a well-understood, measurable, physiological way. It has identifiable mechanisms. It responds to specific treatments. And it is not — not even a little bit — a reflection of your strength, your character, or the depth of your faith.

<div class="callout callout--info">
  <span class="callout__icon">ℹ️</span>
  <div><div class="callout__title">Anxiety disorders are the most common mental health condition</div>Approximately 1 in 6 people in England report a common mental health problem in any given week. Anxiety disorders are among the most prevalent — and among the most treatable.</div>
</div>
"@

# DEPRESSION MEN
ReplaceOpening "depression-men-africa" @"
---
title: "Depression in African and Black Men — Breaking the Silence That Is Killing People"
excerpt: "Black men are significantly less likely to seek help for depression and significantly more likely to present in crisis. This is a guide to what depression actually looks like in men — and why getting help is strength, not weakness."
category: "mental-health"
categoryLabel: "Mental Health"
date: "2025-06-08"
lastUpdated: "June 2025"
readTime: 12
tags: ["Depression", "Men's Mental Health", "Black Men", "African Mental Health", "Mental Health Stigma"]
heroImage: "/images/depression.webp"
published: true
---

Suicide is the leading cause of death for men aged 20–49 in England and Wales. Not cancer. Not road traffic accidents. Suicide.

I put that sentence first because it is the sentence people need to sit with before they decide that depression is not a real problem, or that strong men do not talk about their feelings, or that prayer is sufficient where medicine is also needed. The men dying from this are not weak men. They are men who had no framework for understanding what was happening to them, no vocabulary for asking for help, and no cultural permission to seek it.

In African communities, the situation is quietly catastrophic. Black men access mental health services at lower rates than any other demographic group in the UK. When they do reach services, they are more likely to arrive in crisis — through A&E, through a mental health section, through a crisis team — rather than through the GP appointment that catches things early. The system sees them late, often when the window for simpler intervention has long passed.

This guide is about changing that — starting with what depression in men actually looks like, because it does not look like what most people picture.
"@

# KIDNEY DISEASE
ReplaceOpening "kidney-disease-black-patients" @"
---
title: "Kidney Disease — The Silent Condition Affecting Black Patients at Three Times the Rate"
excerpt: "Chronic kidney disease affects Black adults at three times the rate of white adults, yet 90% of people with early CKD have no symptoms at all. Here is what you need to know — and why a routine blood test could be the most important thing you do this year."
category: "chronic-conditions"
categoryLabel: "Chronic Conditions"
date: "2025-06-26"
lastUpdated: "June 2025"
readTime: 14
tags: ["Kidney Disease", "CKD", "Black Health", "Renal Health", "eGFR"]
heroImage: "/images/kidneydisease.webp"
published: true
---

There is a blood test I now add to almost every routine check I do for Black patients over 40. It is not standard protocol. It is not what the appointment was booked for. But after years of watching people receive serious kidney disease diagnoses that should have been caught five years earlier — caught, and managed, and slowed — I have stopped waiting to be asked.

The test takes 30 seconds to add to a request form. The result comes back in a few days. And in a meaningful number of cases, what it finds is a kidney function that has been quietly declining for years without producing a single symptom the patient noticed.

That is the defining feature of chronic kidney disease in its early stages: silence. Your kidneys continue filtering your blood, regulating your blood pressure, producing hormones — doing everything they are supposed to do — even when functioning at 60%, 50%, 40% of normal capacity. There is no alarm. No pain. No obvious sign. Just a slow, invisible decline.

For Black and African adults, the risk of that silent decline is three times higher than for white adults. This gap shows up consistently across decades of UK and US data, driven by biology, by the disproportionate burden of hypertension and diabetes in our communities, and by a healthcare system that has historically underdiagnosed us.

<div class="callout callout--info">
  <span class="callout__icon">ℹ️</span>
  <div><div class="callout__title">What the kidneys actually do</div>Your kidneys filter approximately 180 litres of blood every day, removing waste products and excess fluid as urine. They also regulate blood pressure, produce hormones that stimulate red blood cell production, and activate vitamin D. When they fail, everything fails with them.</div>
</div>
"@

# VITAMIN D
ReplaceOpening "vitamin-d-deficiency-dark-skin" @"
---
title: "Vitamin D Deficiency — Why Almost Every African in the UK Is Deficient and What to Do About It"
excerpt: "The biology of melanin combined with UK sunlight means that dark-skinned people living in Britain are almost universally vitamin D deficient. This matters more than most people realise — and the fix is cheap and simple."
category: "chronic-conditions"
categoryLabel: "Chronic Conditions"
date: "2025-06-27"
lastUpdated: "June 2025"
readTime: 11
tags: ["Vitamin D", "Vitamin D Deficiency", "Black Health", "Supplements", "Fatigue"]
heroImage: "/images/vitamind.webp"
published: true
---

If I had to name one blood test I wish I had ordered sooner for every African patient I have seen in the UK, it would be vitamin D.

Not because it is dramatic. Not because vitamin D deficiency kills people quickly or obviously. But because of how consistently I find it — severely low, sometimes catastrophically low — in patients who have been tired for two years, achey for three, struggling with mood for longer than they can pinpoint. Patients who have had thyroid tests, full blood counts, inflammatory markers — all normal — and been told there is nothing to explain how they feel.

Then we check vitamin D. And there it is: 14 nmol/L. 19 nmol/L. Once, memorably, 8 nmol/L in a 34-year-old who had been told by three different doctors that her fatigue was stress-related.

It is not complicated biology. Dark skin evolved in equatorial regions where UV radiation is intense year-round. Melanin — the pigment that creates that protection — is extraordinarily effective at blocking UV. In Nigeria, Zimbabwe, Ghana, that is an advantage. In Birmingham, Edinburgh, or Manchester, at latitudes where UVB is weak for most of the year, that same melanin blocks the limited sunlight that reaches you. The result is predictable and near universal: African adults living in the UK cannot synthesise adequate vitamin D from sunlight for most of the year. Supplementation is not optional. It is physiologically necessary.

<div class="callout callout--info">
  <span class="callout__icon">ℹ️</span>
  <div><div class="callout__title">What vitamin D actually is</div>Vitamin D is technically a hormone, not a vitamin. Your skin synthesises it when exposed to UVB radiation from sunlight. It is then converted in the liver and kidneys into its active form, which regulates calcium absorption, immune function, muscle function, and mood.</div>
</div>
"@

# STROKE
ReplaceOpening "stroke-black-patients" @"
---
title: "Stroke — Recognising It, Surviving It, and the Disparity Nobody Talks About"
excerpt: "Black adults are twice as likely to have a stroke as white adults, and more likely to have one younger. Here is how to recognise a stroke, what happens in those critical first hours, and what life after stroke actually looks like."
category: "chronic-conditions"
categoryLabel: "Chronic Conditions"
date: "2025-06-28"
lastUpdated: "June 2025"
readTime: 13
tags: ["Stroke", "Black Health", "FAST", "Cardiovascular", "Brain Health"]
heroImage: "/images/stroke.webp"
published: true
---

Four and a half hours. That is the window.

From the moment a stroke begins to the point at which clot-dissolving treatment is no longer possible: four and a half hours. In that window, a person can go from a stroke that leaves minimal lasting damage to one that takes language, movement, independence. The difference is often not the severity of the stroke itself. It is how quickly someone called 999.

I have sat with families after strokes. I have seen what a one-hour delay costs. I have also seen — in the case of Josephine, which I describe later in this article — what acting in four minutes looks like. She is alive and walks without a stick because her husband did not wait to see if it would pass.

Black adults in the UK are twice as likely to have a stroke as white adults. They are more likely to have that stroke in their 40s or 50s rather than their 60s or 70s. They are more likely to have the haemorrhagic type — where a vessel bursts — which carries higher mortality. And they are more likely, according to consistent UK data, to arrive at hospital later after symptom onset.

That last statistic is the one we can change. Right now. Today.

<div class="callout callout--danger">
  <span class="callout__icon">🚨</span>
  <div><div class="callout__title">FAST — act on any one of these</div><strong>F</strong>ace drooping — one side drooping or numb, uneven smile<br><strong>A</strong>rms — one arm weak or numb, drifts downward when both raised<br><strong>S</strong>peech — slurred, strange, unable to speak or understand<br><strong>T</strong>ime — call 999 immediately. Do not wait. Do not drive yourself.</div>
</div>
"@

# FIBROIDS
ReplaceOpening "fibroids-african-women" @"
---
title: "Fibroids — What African and Black Women Need to Know"
excerpt: "Black and African women are 2–3 times more likely to develop fibroids, develop them younger, and have more severe symptoms. Yet many suffer for years before getting a diagnosis. Here is the complete guide."
category: "womens-health"
categoryLabel: "Women's Health"
date: "2025-06-20"
lastUpdated: "June 2025"
readTime: 14
tags: ["Fibroids", "Uterine Fibroids", "Women's Health", "Black Women's Health", "Fertility"]
heroImage: "/images/fibroids.webp"
published: true
---

She had been soaking through pads every 45 minutes for the first three days of every period since she was 26. She took iron tablets for the anaemia, booked nothing for the first week of each month, and described her symptoms — when she finally described them to me at 38 — with a resignation that suggested she had long since stopped expecting anyone to do anything about them.

"I thought it was just how I am," she said.

It was not how she was. She had fibroids — multiple, significant, treatable — that had been doing this to her body for over a decade while nobody thought to look.

Nkechi's story is not unusual. It is representative of something I see repeatedly: Black and African women enduring fibroid symptoms for years, sometimes a decade or more, before receiving a proper investigation. The symptoms get normalised. The pain gets attributed to character. The bleeding gets managed rather than investigated.

Up to 80% of Black women will develop uterine fibroids by the age of 50. That is not a minority experience — it is the majority one. And yet the conversation about fibroids in African communities remains muted, the diagnosis is often delayed, and treatment options are frequently not fully explained.

<div class="callout callout--info">
  <span class="callout__icon">ℹ️</span>
  <div><div class="callout__title">What are fibroids?</div>Uterine fibroids (also called leiomyomas or myomas) are non-cancerous growths that develop in or around the uterus. They are made of muscle and fibrous tissue and range in size from a pea to — in rare cases — the size of a melon. They are almost always benign.</div>
</div>
"@

# BURNOUT
ReplaceOpening "burnout-when-tiredness-becomes-serious" @"
---
title: "Burnout — When Tiredness Becomes Something More Serious"
excerpt: "Burnout is not laziness, weakness, or a need for a holiday. It is a state of chronic stress that has reached a point of physical and emotional depletion. Here is how to recognise it, what it does to your body, and what actually helps."
category: "mental-health"
categoryLabel: "Mental Health"
date: "2025-06-23"
lastUpdated: "June 2025"
readTime: 11
tags: ["Burnout", "Stress", "Mental Health", "Work Stress", "Exhaustion"]
heroImage: "/images/burnout.webp"
published: true
---

A colleague described it to me as "the lights going out from the inside." She had been a nurse for eleven years, worked through the worst of the pandemic, taken on extra shifts, mentored junior staff, and done all of it without complaint. Then one Tuesday morning she sat in her car in the hospital car park for forty minutes and could not make herself go in.

Not because she was sick. Not because anything specific had happened. The tank was simply empty. And unlike ordinary tiredness, emptying it over eleven years meant that a weekend off was not going to fill it back up.

Burnout gets talked about casually — "I am so burned out from this project" — in ways that dilute what it actually is. Clinical burnout is a distinct state of chronic depletion that changes how you think, how you feel physically, and how you relate to your work and the people around you. It does not resolve with rest alone. It requires a different kind of intervention.

I see it frequently, and I notice patterns in who presents with it. High-functioning people. Conscientious people. People with a strong sense of professional identity. And disproportionately, African and Black professionals navigating workplaces where the bar is demonstrably higher — where every mistake is more visible, where they carry the cognitive load of code-switching, and where the spaces to admit struggle are much narrower.
"@

# BACK PAIN
ReplaceOpening "back-pain-evidence" @"
---
title: "Back Pain — What the Evidence Actually Says (And Why Most People Are Being Treated Wrong)"
excerpt: "Back pain affects most people at some point. Most of the common treatments are either ineffective or actively counterproductive. Here is what the evidence actually says."
category: "symptoms"
categoryLabel: "Symptoms Guide"
date: "2025-07-03"
lastUpdated: "June 2025"
readTime: 12
tags: ["Back Pain", "Lower Back Pain", "Physiotherapy", "Chronic Pain", "Spine"]
heroImage: "/images/backpain.webp"
published: true
---

In 2015, an article in The Lancet described back pain management globally as characterised by "widespread use of ineffective and potentially harmful treatments." This was not a fringe view. It was a landmark series written by leading back pain researchers, describing a consistent disconnect between what evidence shows works and what patients actually receive.

A decade on, not much has changed.

People with back pain are still being told to rest — which makes things worse. They are still being sent for MRI scans that generate alarming-sounding findings that are usually incidental and often increase fear rather than guide better treatment. They are still receiving opioid prescriptions that have minimal evidence for this type of pain and significant dependency risk.

This is not malicious. It is partly the result of genuine clinical complexity — back pain is heterogeneous and genuinely difficult to treat — and partly the result of patient expectation. Patients want something done. A diagnosis. An image. A procedure. And clinicians, under time pressure, often comply even when the evidence does not support it.

What the evidence actually supports is less dramatic and less immediately satisfying. But it works considerably better.

<div class="callout callout--danger">
  <span class="callout__icon">🚨</span>
  <div><div class="callout__title">Red flags — back pain that needs urgent assessment</div>Go to A&E or see your GP urgently if back pain is accompanied by: loss of bladder or bowel control, numbness or weakness in both legs, saddle anaesthesia (numbness in the groin/inner thighs), or occurs in someone with cancer, significant trauma, fever, or unexplained weight loss.</div>
</div>
"@

# HEART DISEASE
ReplaceOpening "heart-disease-prevention" @"
---
title: "Heart Disease — The Warning Signs, the Risk Factors, and How to Cut Your Risk in Half"
excerpt: "Heart disease kills more people in the UK than any other condition. Black adults face a significantly higher risk. Here is what actually causes it, the symptoms people ignore, and the evidence-based steps that genuinely reduce your risk."
category: "chronic-conditions"
categoryLabel: "Chronic Conditions"
date: "2025-07-08"
lastUpdated: "July 2025"
readTime: 13
tags: ["Heart Disease", "Cardiovascular Health", "Black Health", "Heart Attack", "Prevention"]
heroImage: "/images/heartdisease.webp"
published: true
---

Every ten minutes in the UK, someone dies from coronary heart disease.

Not every hour. Every ten minutes. Heart disease is not a historical problem that medicine has solved — it remains the leading cause of death in this country, ahead of all cancers combined. And for Black and African adults the picture is worse: higher rates of hypertension driving earlier arterial damage, higher rates of diabetes compounding cardiovascular risk, and a healthcare system that does not always identify these risks as early or manage them as aggressively as it should.

The paradox is that heart disease is also among the most preventable conditions. Up to 80% of premature cardiovascular deaths could be avoided with interventions that are available, affordable, and evidence-based. The gap between what is possible and what actually happens is not about medical knowledge — that knowledge exists. It is about who receives the conversation early enough to act on it.

This guide is that conversation.

<div class="callout callout--info">
  <span class="callout__icon">ℹ️</span>
  <div><div class="callout__title">What coronary heart disease actually is</div>Coronary heart disease (CHD) occurs when the arteries supplying blood to the heart muscle become narrowed by a build-up of fatty deposits called plaques — a process called atherosclerosis. This reduces blood flow to the heart. A heart attack occurs when a plaque ruptures, a clot forms, and blood supply is completely cut off.</div>
</div>
"@

Write-Host "`nAll articles updated successfully"
