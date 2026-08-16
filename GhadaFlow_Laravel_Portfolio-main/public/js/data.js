const portfolioData = {
  links: {
    email: "mailto:ghadacareer75@outlook.com",
    linkedin: "https://www.linkedin.com/in/ghada-saleh-altuwijri-9971a83a8/",
    github: "https://github.com/ghadacareer65-ui"
  },
  education: {
    university: {en:"Qassim University", ar:"جامعة القصيم"},
    college: {en:"Applied College", ar:"الكلية التطبيقية"},
    qualification: {en:"Diploma", ar:"دبلوم"},
    major: {en:"Programming and Computer Science", ar:"البرمجة وعلوم الحاسب"},
    department: {en:"Web Development", ar:"تطوير الويب"},
    graduation: {en:"2026", ar:"2026"},
    gpa: {en:"4.62 / 5.00", ar:"4.62 / 5.00"}
  },
  experience: {
    kafaat: {
      organization:{en:"Kafaat Association for Youth Capacity Building",ar:"جمعية كفاءات الأهلية لتنمية قدرات الشباب"},
      position:{en:"Web Developer Intern",ar:"متدربة تطوير ويب"},
      description:{en:"Web Developer & AI-Powered Web Product Developer",ar:"مطوّرة ويب ومنتجات ويب مدعومة بالذكاء الاصطناعي"},
      period:{en:"July 2026 – December 2026",ar:"يوليو 2026 – ديسمبر 2026"},
      status:{en:"Ongoing",ar:"مستمرة"},
      location:{en:"Buraidah, Al-Qassim, Saudi Arabia",ar:"بريدة، منطقة القصيم، المملكة العربية السعودية"},
      setting:{en:"On-site",ar:"حضوري"},
      responsibilities:{
        en:[
          "Improving and developing existing website pages.",
          "Proposing and building a Smart Support Assistant using AI.",
          "Developing a solution that helps the Admin handle user problems and inquiries.",
          "Building and connecting databases with the website.",
          "Automating website data.",
          "Testing the system and its functionality.",
          "Deploying and running the project."
        ],
        ar:[
          "تطوير وتحسين صفحات الموقع الحالية.",
          "اقتراح وبناء مساعد دعم ذكي باستخدام الذكاء الاصطناعي.",
          "تطوير حل يساعد المشرف في التعامل مع مشكلات واستفسارات المستخدمين.",
          "إنشاء قواعد البيانات وربطها بالموقع.",
          "أتمتة بيانات الموقع وتنظيمها.",
          "اختبار النظام والتحقق من وظائفه.",
          "المساهمة في تشغيل المشروع ونشره."
        ]
      }
    },
    ibm:{
      organization:{en:"IBM SkillsBuild AI Experiential Learning Lab",ar:"مختبر IBM SkillsBuild للتجربة العملية في الذكاء الاصطناعي"},
      role:{en:"Team Leader",ar:"قائدة الفريق"},
      period:{en:"May 2026 – July 2026",ar:"مايو 2026 – يوليو 2026"},
      description:{en:"Worked as a team leader during the IBM SkillsBuild AI Experiential Learning Lab.",ar:"عملت قائدةً للفريق خلال مختبر IBM SkillsBuild للتجربة العملية في الذكاء الاصطناعي."}
    }
  },
  projects: [
    {
      id:"unitour", number:"01",
      name:{en:"UniTour",ar:"UniTour"},
      type:{en:"Academic Guidance Platform",ar:"منصة للإرشاد الأكاديمي"},
      context:{en:"Graduation Project",ar:"مشروع تخرج"},
      period:{en:"May 2025 – January 2026",ar:"مايو 2025 – يناير 2026"},
      team:{en:"6 members",ar:"6 أعضاء"},
      role:{en:"Team Leader",ar:"قائدة الفريق"},
      overview:{en:"An academic guidance platform that helps students explore universities and majors through personalized recommendations based on interests and academic performance.",ar:"منصة للإرشاد الأكاديمي تساعد الطلاب على استكشاف الجامعات والتخصصات من خلال توصيات مخصصة تعتمد على الاهتمامات والأداء الأكاديمي."},
      problem:{en:"Students can struggle to identify suitable majors and may be interested in a major without meeting its academic requirements.",ar:"قد يواجه الطلاب صعوبة في تحديد التخصص المناسب، وقد يهتم الطالب بتخصص لا يستوفي متطلباته الأكاديمية."},
      solution:{en:"The system analyzes interests, preferences and grades, then provides recommendations that consider both the student's interests and academic eligibility.",ar:"يحلل النظام الاهتمامات والتفضيلات والدرجات، ثم يقدم توصيات تراعي ميول الطالب وأهليته الأكاديمية."},
      howItWorks:{en:["Student answers interest and preference questions.","The system analyzes the collected information and grades.","The recommendation logic matches interests with academic eligibility.","The system presents suitable majors and university recommendations."],ar:["يجيب الطالب عن أسئلة الاهتمامات والتفضيلات.","يحلل النظام المعلومات والدرجات.","تطابق خوارزمية التوصية الاهتمامات مع الأهلية الأكاديمية.","يعرض النظام التخصصات والجامعات المناسبة."]},
      features:{en:["Personalized academic recommendations","Interest and preference assessment","Grade-based eligibility matching","University recommendations","Virtual university tours"],ar:["توصيات أكاديمية مخصصة","تقييم الاهتمامات والتفضيلات","مطابقة الأهلية الأكاديمية بناءً على الدرجات","التوصية بالجامعات","الجولات الافتراضية للجامعات"]},
      contribution:{en:["Led a six-member project team.","Distributed tasks based on team members' interests and strengths.","Improved the user experience.","Reviewed team members' work and helped identify and fix errors.","Integrated AI capabilities and helped select the classification approach.","Developed the Random Forest Classification algorithm from scratch.","Contributed to connecting recommendation logic with the database and project requirements."],ar:["قدت فريق المشروع المكوّن من ستة أعضاء.","وزعت المهام وفق اهتمامات أعضاء الفريق ونقاط قوتهم.","ساهمت في تحسين تجربة المستخدم.","راجعت أعمال الفريق وساعدت في اكتشاف الأخطاء ومعالجتها.","ساهمت في دمج قدرات الذكاء الاصطناعي واختيار أسلوب التصنيف المناسب.","طورت خوارزمية Random Forest Classification من الصفر.","ساهمت في ربط منطق التوصيات بقاعدة البيانات ومتطلبات المشروع."]},
      technologies:["Python","PHP","Flask API","MySQL","phpMyAdmin","Random Forest Classification"],
      database:"MySQL", databaseManagement:"phpMyAdmin", numberOfTables:"9",
      ai:{en:"Random Forest Classification",ar:"Random Forest Classification"},
      video:"videos/unitour.mp4"
    },
    {
      id:"rafeed", number:"02",
      name:{en:"Rafeed AI",ar:"رفيد AI"},
      type:{en:"AI-Powered Travel Assistant",ar:"مساعد سفر مدعوم بالذكاء الاصطناعي"},
      context:{en:"IBM SkillsBuild AI Experiential Learning Lab",ar:"مختبر IBM SkillsBuild للتجربة العملية في الذكاء الاصطناعي"},
      period:{en:"May 2026 – July 2026",ar:"مايو 2026 – يوليو 2026"},
      team:{en:"Team project",ar:"مشروع جماعي"},
      role:{en:"Team Leader",ar:"قائدة الفريق"},
      overview:{en:"An AI-powered travel assistant designed around specialized agents for travel recommendations and a unified conversational experience.",ar:"مساعد سفر مدعوم بالذكاء الاصطناعي يعتمد على وكلاء متخصصين لتقديم توصيات السفر ضمن تجربة محادثية موحدة."},
      problem:{en:"Travel planning can require handling several domains such as transportation, accommodation, activities, food and emergency support.",ar:"قد يتطلب تخطيط الرحلة التعامل مع مجالات متعددة مثل النقل والسكن والأنشطة والطعام والدعم في الحالات الطارئة."},
      solution:{en:"A multi-agent workflow coordinates specialized agents and combines their outputs into one organized response.",ar:"يستخدم المشروع سير عمل متعدد الوكلاء لتنسيق الوكلاء المتخصصين ودمج مخرجاتهم في استجابة منظمة واحدة."},
      howItWorks:{en:["The central orchestrator identifies the relevant travel domains.","Specialized agents work on their assigned tasks.","The orchestrator coordinates the outputs.","The final response is combined into one conversational experience."],ar:["يحدد المنسق المركزي المجالات المناسبة للطلب.","يعمل الوكلاء المتخصصون على المهام المسندة إليهم.","ينسق المنسق مخرجات الوكلاء.","تجمع النتائج في تجربة محادثية موحدة."]},
      features:{en:["Multi-Agent AI Architecture","Central Agent Orchestration","Personalized Travel Planning","Multi-Domain Travel Support","Emergency & Safety Support"],ar:["معمارية ذكاء اصطناعي متعددة الوكلاء","تنسيق مركزي للوكلاء","تخطيط سفر مخصص","دعم مجالات متعددة في السفر","دعم الحالات الطارئة والسلامة"]},
      agents:{en:["Travel & Transportation Agent","Accommodation Agent","Match & Events Agent","Food & Entertainment Agent","Language & Culture Agent","Emergency Support Agent"],ar:["وكيل السفر والنقل","وكيل الإقامة","وكيل المباريات والفعاليات","وكيل الطعام والترفيه","وكيل اللغة والثقافة","وكيل الدعم في الحالات الطارئة"]},
      contribution:{en:["Worked as Team Leader.","Provided guidance on selecting appropriate AI tools and models.","Tested AI models and evaluated their suitability.","Helped with integration between AI models, agents and tools.","Guided the team during development.","Helped refine the AI workflow and agent behavior."],ar:["عملت قائدة للفريق.","قدمت التوجيه في اختيار أدوات ونماذج الذكاء الاصطناعي المناسبة.","اختبرت النماذج وقيّمت مدى ملاءمتها.","ساهمت في الربط بين النماذج والوكلاء والأدوات.","وجهت الفريق خلال التطوير.","ساهمت في تحسين سير عمل الوكلاء وسلوكهم."]},
      technologies:["IBM watsonx Orchestrate","Agentic AI","Multi-Agent Architecture","Large Language Models","Prompt Engineering","Specialized AI Agents"],
      video:"videos/rafeed_compressed.mp4"
    },
    {
      id:"smart-support", number:"03",
      name:{en:"AI Agent MVP – Smart Support Assistant",ar:"النموذج الأولي لمساعد الدعم الذكي"},
      type:{en:"AI-powered Customer Support Assistant / MVP",ar:"مساعد دعم ذكي مدعوم بالذكاء الاصطناعي"},
      context:{en:"Individual Project",ar:"مشروع فردي"},
      role:{en:"Developer",ar:"المطورة"},
      overview:{en:"A simple AI support assistant MVP that generates draft responses for user inquiries and keeps a human reviewer in the loop before a final response is approved.",ar:"نموذج أولي لمساعد دعم ذكي يولد مسودات للرد على استفسارات المستخدمين مع إبقاء المراجعة البشرية ضمن سير العمل قبل اعتماد الرد النهائي."},
      problem:{en:"Support teams may need a faster way to prepare consistent responses while keeping human review before sending.",ar:"قد تحتاج فرق الدعم إلى طريقة أسرع لإعداد ردود مناسبة مع الحفاظ على المراجعة البشرية قبل الإرسال."},
      solution:{en:"The system receives a user problem, generates a draft with an AI agent, then sends it to Admin review. Rejected drafts can be regenerated using Admin feedback.",ar:"يستقبل النظام مشكلة المستخدم، ثم يولد الوكيل مسودة للرد ويعرضها على المشرف للمراجعة. ويمكن إعادة توليد المسودة عند رفضها مع الاستفادة من ملاحظات المشرف."},
      howItWorks:{en:["User submits a problem or inquiry.","AI Agent generates a draft response.","Admin reviews the draft.","Approved drafts become final responses.","Rejected drafts are regenerated using Admin feedback."],ar:["يرسل المستخدم المشكلة أو الاستفسار.","يولد الوكيل مسودة للرد.","يراجع المشرف المسودة.","تتحول المسودة المعتمدة إلى رد نهائي.","يعاد توليد المسودة المرفوضة بالاعتماد على ملاحظات المشرف."]},
      features:{en:["AI-generated draft responses","Human review before sending","Supervisor feedback and regeneration","Saved conversations","User and Admin interfaces","AI model selection"],ar:["توليد مسودات للرد بالذكاء الاصطناعي","مراجعة بشرية قبل الإرسال","إعادة التوليد بناءً على ملاحظات المشرف","حفظ المحادثات","واجهتا المستخدم والمشرف","اختيار نموذج الذكاء الاصطناعي"]},
      contribution:{en:["Designed and developed the project independently.","Built the AI Agent and connected it with selected LLMs.","Designed prompts.","Built User and Admin interfaces.","Implemented the User → AI → Draft → Admin workflow.","Implemented approval and feedback.","Added conversation history and management.","Built the SQLite database.","Integrated and tested multiple AI models.","Managed the project using Git and GitHub."],ar:["صممت وطورت المشروع بشكل مستقل.","بنيت الوكيل وربطته بنماذج اللغة المختارة.","صممت الـPrompts.","بنيت واجهتي المستخدم والمشرف.","طبقت سير العمل من المستخدم إلى الوكيل ثم المسودة والمشرف.","طبقت الاعتماد والملاحظات.","أضفت سجل المحادثات وإدارتها.","أنشأت قاعدة بيانات SQLite.","دمجت واختبرت عدة نماذج للذكاء الاصطناعي.","أدرت المشروع باستخدام Git وGitHub."]},
      technologies:["Python","LangChain","Streamlit","OpenAI API","OpenRouter API","SQLite","python-dotenv","Git","GitHub"],
      video:"videos/smart-support.mp4"
    },
    {
      id:"share-opinion", number:"04",
      name:{en:"Share Your Opinion",ar:"شارك رأيك"},
      type:{en:"Web Application / Beneficiary Feedback Survey",ar:"تطبيق ويب / استبيان آراء المستفيدين"},
      context:{en:"Kafaat Association for Youth Capacity Building",ar:"جمعية كفاءات الأهلية لتنمية قدرات الشباب"},
      period:{en:"July 2026",ar:"يوليو 2026"},
      team:{en:"Team project",ar:"مشروع جماعي"},
      overview:{en:"A beneficiary feedback survey platform designed to measure how much beneficiaries benefited from training programs provided by Kafaat Association.",ar:"منصة لاستبيان آراء المستفيدين تهدف إلى قياس مدى استفادتهم من البرامج التدريبية المقدمة من جمعية كفاءات."},
      problem:{en:"The organization needed a practical way to collect, organize and review beneficiary feedback.",ar:"احتاجت الجهة إلى طريقة عملية لجمع آراء المستفيدين وتنظيمها ومراجعتها."},
      solution:{en:"A responsive web survey that supports response submission, database storage, organization notification and review of results.",ar:"تطبيق ويب متجاوب يدعم إرسال الردود وتخزينها في قاعدة البيانات وإشعار الجهة ومراجعة النتائج."},
      howItWorks:{en:["Beneficiary opens the survey.","Beneficiary submits feedback.","Responses are stored in the database.","The organization can review the collected results and identify areas for improvement."],ar:["يفتح المستفيد الاستبيان.","يرسل المستفيد رأيه.","تحفظ الردود في قاعدة البيانات.","يمكن للجهة مراجعة النتائج وتحديد مجالات التحسين."]},
      features:{en:["Beneficiary feedback survey","Response submission","Database storage","Organization notification","Results reporting","Review of survey results","Responsive interface"],ar:["استبيان آراء المستفيدين","إرسال الردود","تخزين البيانات في قاعدة البيانات","إشعار الجهة","عرض النتائج","مراجعة نتائج الاستبيان","واجهة متجاوبة"]},
      contribution:{en:["Improved user experience.","Added the organization's visual identity.","Created a database compatible with the existing website.","Improved responsive behavior.","Tested functionality and verified features.","Contributed to publishing the final page."],ar:["ساهمت في تحسين تجربة المستخدم.","أضفت الهوية البصرية للجهة.","أنشأت قاعدة بيانات متوافقة مع الموقع الحالي.","حسنت الاستجابة للشاشات المختلفة.","اختبرت الوظائف وتحققت من المميزات.","ساهمت في نشر الصفحة النهائية."]},
      technologies:["HTML","CSS","JavaScript","REST API","Database"],
      video:"videos/share_opinion.mp4"
    }
  ],
  certificates: [
    {organization:"IBM SkillsBuild",title:"Enterprise Design Thinking Practitioner",url:"https://www.credly.com/badges/91a2cdf7-6158-48e3-b0e9-2a7cd02916c9/linked_in?t=tfht6s"},
    {organization:"IBM SkillsBuild",title:"Make Agentic AI Work for You",url:"https://www.credly.com/badges/b9a615f9-57e1-44e7-aa09-622a9608959b/linked_in?t=tfht3s"},
    {organization:"IBM SkillsBuild",title:"AI Experiential Learning Lab: Industry Immersion",url:"https://www.credly.com/badges/f2c041af-048c-48cf-a55a-fcf7a889c563/linked_in?t=tix2ov"},
    {organization:"IBM SkillsBuild",title:"Introduction to Retrieval-Augmented Generation (RAG)",url:"https://drive.google.com/file/d/1omHd5x3hNjDMfWvtmYrVndr9vvUEnigZ/view?usp=drivesdk"},
    {organization:"IBM SkillsBuild",title:"Rise of Multi-Agent Systems",url:"https://drive.google.com/file/d/11aDyGQZYtEfO-amnGIczeqPH_Z5k_eck/view?usp=drivesdk"},
    {organization:"IBM SkillsBuild",title:"Unleashing AI Agents",url:"https://drive.google.com/file/d/1XiTt_viFtLPK-Vwv8GgFn-zSicp5ACIK/view?usp=drivesdk"},
    {organization:"Simplilearn",title:"LLM Fine-Tuning and Customization",url:"https://drive.google.com/file/d/1HgxjqyNcACEMCEOIonwDW7BAXC0mGSHm/view?usp=drivesdk"},
    {organization:"Simplilearn",title:"Advanced GenAI Tools",url:"https://drive.google.com/file/d/1P7-v2QVDiFIQSSULQAjbZJ7KqPVr3xtS/view?usp=drivesdk"},
    {organization:"Simplilearn",title:"Free Generative AI Ready Organization Course",url:"https://drive.google.com/file/d/14IXj4vLABDbKZdT3GYOQK3b8gK8B8Y4Z/view?usp=drivesdk"},
    {organization:"Satr Academy / Tuwaiq Academy",title:"Python 101",url:"https://drive.google.com/file/d/1DxSZL4jHmBd2gCr_9b_XsVKeIr9mXI80/view?usp=drivesdk"},
    {organization:"Satr Academy / Tuwaiq Academy",title:"Python 102",url:"https://drive.google.com/file/d/1MtvLsycxA5S00Lh1DCMZ5TubTY_EN5Yh/view?usp=drivesdk"},
    {organization:"Edraak",title:"Time Management and Stress Management",url:"https://www.edraak.org/"},
    {organization:"Edraak",title:"Problem Solving and Decision Making in the Workplace",url:"https://www.edraak.org/"}
  ],
  skills:{
    frontend:["HTML","CSS","JavaScript"],
    backend:["PHP","Python"],
    programmingLanguages:["Python","PHP","JavaScript","SQL"],
    databases:["MySQL","SQLite"],
    frameworksLibraries:["LangChain","Streamlit"],
    ai:["Generative AI","Large Language Models (LLMs)","Prompt Engineering","AI Agents"],
    tools:["Git","GitHub","VS Code","OpenAI API","OpenRouter API","python-dotenv"]
  },
  volunteer:{
    platform:{en:"National Volunteer Platform",ar:"المنصة الوطنية للعمل التطوعي"},
    totalHours:{en:"35+ volunteer hours",ar:"35+ ساعة تطوعية"},
    certificates:{en:["7+ Hours","27+ Hours"],ar:["7+ ساعات","27+ ساعة"]},
    activities:{en:["Forsati Forum — 10 Volunteer Hours","Saudi National Day — 15 Volunteer Hours"],ar:["ملتقى فرصتي — 10 ساعات تطوع","اليوم الوطني — 15 ساعة تطوع"]}
  },
  languages:{
    arabic:{label:{en:"Arabic",ar:"العربية"},level:{en:"Native",ar:"اللغة الأم"}},
    english:{label:{en:"English",ar:"الإنجليزية"},level:{en:"Intermediate",ar:"متوسط"}}
  }
};
