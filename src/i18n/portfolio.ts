import type { CreativePractice, HomeHighlight, JourneyMilestone, SkillGroup } from '../types/portfolio'

export interface LocalizedPortfolioContent {
  journey: JourneyMilestone[]
  skillGroups: SkillGroup[]
  creativePractices: CreativePractice[]
  homeHighlights: HomeHighlight[]
}

export const portfolioByLocale: Record<'en' | 'ar', LocalizedPortfolioContent> = {
  en: {
    journey: [
      {
        id: 'first-steps',
        period: '2016',
        title: 'Where it all began',
        description: 'I opened Photoshop for the first time and fell in love with shaping images into ideas.',
        toolIds: ['photoshop'],
      },
      {
        id: 'video-and-freelance',
        period: 'Next chapter',
        title: 'Moving images, new opportunities',
        description: 'I soon found my way into video editing with Premiere Pro. I began taking on freelance projects and learned something new with every brief.',
        toolIds: ['premiere', 'photoshop'],
      },
      {
        id: 'creative-toolkit',
        period: 'Along the way',
        title: 'An ever-growing toolkit',
        description: 'I kept exploring: Illustrator, XD, After Effects, Lightroom, and more from Adobe, alongside CapCut, Figma, Canva, and DaVinci Resolve.',
        toolIds: ['illustrator', 'xd', 'after-effects', 'lightroom', 'capcut', 'figma', 'canva', 'davinci'],
      },
      {
        id: 'story-and-direction',
        period: 'Another creative chapter',
        title: 'Stories beyond the screen',
        description: 'My work expanded into scriptwriting, ghostwriting, writing for directors, and art direction. I have also appeared on camera for advertising and educational videos.',
        toolIds: [],
      },
      {
        id: 'khana',
        period: '2026',
        title: 'A chapter with Khana',
        description: 'In 2026, I worked with Khana, bringing together the design, editing, and storytelling experience I had built through freelance work.',
        toolIds: [],
      },
    ],
    skillGroups: [
      {
        id: 'design-image',
        title: 'Design & image making',
        description: 'I create, edit, and shape visual ideas for screen and print.',
        toolIds: ['photoshop', 'illustrator', 'xd', 'lightroom'],
        practices: ['Visual design', 'Image editing'],
      },
      {
        id: 'video-motion',
        title: 'Video & motion',
        description: 'I edit video and bring stories to life with motion.',
        toolIds: ['premiere', 'after-effects', 'capcut', 'davinci'],
        practices: ['Video editing', 'Educational content'],
      },
      {
        id: 'digital-tools',
        title: 'Digital & everyday tools',
        description: 'I use flexible tools for collaborative design, content, and everyday work.',
        toolIds: ['figma', 'canva', 'office'],
        practices: ['Most of Microsoft Office', 'Everyday office tasks'],
      },
      {
        id: 'words-direction',
        title: 'Words, direction & presence',
        description: 'My creative work reaches beyond the editing timeline.',
        toolIds: [],
        practices: ['Scriptwriting', 'Ghostwriting', 'Writing for directors', 'Art direction', 'On-camera work for ads & education'],
      },
    ],
    creativePractices: [
      { title: 'Words with a purpose', description: 'I write scripts, ghostwrite, and help shape a director’s idea into words.', mark: '01' },
      { title: 'A visual point of view', description: 'I bring images, pacing, and feeling together through art direction.', mark: '02' },
      { title: 'In front of the camera', description: 'I appear in advertising and educational videos, too.', mark: '03' },
    ],
    homeHighlights: [
      { label: 'Creative foundations', value: 'Design to video', detail: 'I moved from image-making into editing and freelance projects.' },
      { label: 'Creative range', value: 'Ideas across formats', detail: 'Design, editing, writing, art direction, and on-camera work.' },
      { label: 'Latest chapter', value: 'Khana · 2026', detail: 'A new part of a journey built through freelance work.' },
    ],
  },
  ar: {
    journey: [
      {
        id: 'first-steps',
        period: '٢٠١٦',
        title: 'من هنا بدأت الحكاية',
        description: 'فتحت فوتوشوب للمرة الأولى، واكتشفت متعة تحويل الصور إلى أفكار نابضة بالحياة.',
        toolIds: ['photoshop'],
      },
      {
        id: 'video-and-freelance',
        period: 'الفصل التالي',
        title: 'صور تتحرك وفرص جديدة',
        description: 'شدّني عالم الفيديو، فتعلّمت المونتاج على بريمير وبدأت تنفيذ مشاريع مستقلة. ومع كل مشروع، اكتسبت خبرة جديدة.',
        toolIds: ['premiere', 'photoshop'],
      },
      {
        id: 'creative-toolkit',
        period: 'مع الوقت',
        title: 'أدوات أكثر، وإمكانات أوسع',
        description: 'وسّعت خبرتي ببرامج أدوبي مثل إليستريتور وXD وأفتر إفكتس ولايت روم، وتعلّمت أيضاً كاب كت وفيغما وكانفا ودافنشي ريزولف.',
        toolIds: ['illustrator', 'xd', 'after-effects', 'lightroom', 'capcut', 'figma', 'canva', 'davinci'],
      },
      {
        id: 'story-and-direction',
        period: 'فصل إبداعي آخر',
        title: 'حكايات تتجاوز الشاشة',
        description: 'اتسع عملي ليشمل كتابة النصوص والكتابة للغير والكتابة للمخرجين والإخراج الفني. كما ظهرت أمام الكاميرا في إعلانات ومقاطع تعليمية.',
        toolIds: [],
      },
      {
        id: 'khana',
        period: '٢٠٢٦',
        title: 'محطة مع خانا',
        description: 'في عام ٢٠٢٦ عملت مع خانا، وجمعت في هذه التجربة خبرتي في التصميم والمونتاج ورواية الأفكار التي بنيتها عبر العمل الحر.',
        toolIds: [],
      },
    ],
    skillGroups: [
      {
        id: 'design-image',
        title: 'التصميم وصناعة الصور',
        description: 'أصنع الأفكار البصرية وأعدّلها لتناسب الشاشات والمطبوعات.',
        toolIds: ['photoshop', 'illustrator', 'xd', 'lightroom'],
        practices: ['تصميم بصري', 'معالجة الصور'],
      },
      {
        id: 'video-motion',
        title: 'الفيديو والحركة',
        description: 'أمنتج الفيديو وأضيف الحركة لأروي الحكاية بإيقاعها المناسب.',
        toolIds: ['premiere', 'after-effects', 'capcut', 'davinci'],
        practices: ['مونتاج الفيديو', 'محتوى تعليمي'],
      },
      {
        id: 'digital-tools',
        title: 'التصميم الرقمي وأدوات العمل',
        description: 'أستخدم أدوات مرنة للتصميم التعاوني وصناعة المحتوى وإنجاز العمل اليومي.',
        toolIds: ['figma', 'canva', 'office'],
        practices: ['معظم برامج أوفيس', 'مهام العمل اليومية'],
      },
      {
        id: 'words-direction',
        title: 'الكلمة والرؤية والحضور',
        description: 'يمتد عملي الإبداعي إلى ما هو أبعد من شاشة المونتاج.',
        toolIds: [],
        practices: ['كتابة النصوص', 'الكتابة للغير', 'الكتابة للمخرجين', 'الإخراج الفني', 'الظهور في الإعلانات والمحتوى التعليمي'],
      },
    ],
    creativePractices: [
      { title: 'كلمات تصنع فرقاً', description: 'أكتب النصوص، وأعمل في الكتابة للغير، وأساعد في صياغة أفكار المخرجين.', mark: '٠١' },
      { title: 'رؤية بصرية واضحة', description: 'أجمع الصورة والإيقاع والإحساس في اتجاه فني واحد.', mark: '٠٢' },
      { title: 'أمام الكاميرا', description: 'أشارك بالظهور والأداء في الإعلانات والمحتوى التعليمي.', mark: '٠٣' },
    ],
    homeHighlights: [
      { label: 'بداياتي الإبداعية', value: 'من الصورة إلى الفيديو', detail: 'انتقلت من صناعة الصور إلى المونتاج ومشاريع العمل الحر.' },
      { label: 'مساحات إبداعية', value: 'أفكار بصيغ مختلفة', detail: 'تصميم ومونتاج وكتابة وإخراج فني وظهور أمام الكاميرا.' },
      { label: 'أحدث المحطات', value: 'خانا · ٢٠٢٦', detail: 'فصل جديد بعد سنوات من المشاريع والعمل المستقل.' },
    ],
  },
}
