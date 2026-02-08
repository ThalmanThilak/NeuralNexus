import type { Service } from '../types/service';

export const services: Service[] = [
  {
    id: 'training',
    number: '01',
    title: 'AI TRAINING',
    panelTitle: 'AI Training Programs',
    description: 'Master AI fundamentals, discover powerful tools, and unlock career opportunities.',
    cta: 'Learn More',
    image: '/images/training_portrait.jpg',
    details: {
      overview: 'Empower your team with practical AI skills through hands-on workshops and training programs. From ChatGPT mastery to advanced prompt engineering, we help businesses and individuals leverage AI tools effectively.',
      benefits: [
        'Boost productivity by 40% with AI-powered workflows',
        'Hands-on training with real-world scenarios',
        'Customized curriculum for your industry',
        'Certificate of completion included'
      ],
      features: [
        {
          icon: 'GraduationCap',
          title: 'ChatGPT Mastery',
          description: 'Learn advanced prompting techniques, custom GPTs, and enterprise applications'
        },
        {
          icon: 'Sparkles',
          title: 'Creative AI Tools',
          description: 'Master Midjourney, DALL-E, and other generative AI platforms for design and content'
        },
        {
          icon: 'Zap',
          title: 'Automation with AI',
          description: 'Integrate AI into workflows using tools like Zapier, Make, and custom APIs'
        },
        {
          icon: 'Target',
          title: 'Prompt Engineering',
          description: 'Craft effective prompts that get consistent, high-quality results'
        },
        {
          icon: 'Users',
          title: 'Team Training',
          description: 'Corporate workshops designed for teams of 5-50 people'
        },
        {
          icon: 'Award',
          title: 'Certification',
          description: 'Receive industry-recognized certification upon program completion'
        }
      ],
      process: [
        {
          number: '01',
          title: 'Consultation',
          description: 'We discuss your goals, team skill level, and specific industry needs'
        },
        {
          number: '02',
          title: 'Custom Curriculum',
          description: 'Design a tailored training program with relevant tools and use cases'
        },
        {
          number: '03',
          title: 'Interactive Workshop',
          description: 'Hands-on training sessions with real-time practice and Q&A'
        },
        {
          number: '04',
          title: 'Resources & Support',
          description: 'Ongoing access to materials, templates, and follow-up consultation'
        }
      ],
      pricing: [
        {
          name: 'Introduction',
          price: '€399',
          description: '1-day workshop for small teams',
          features: [
            '4-hour intensive session',
            'Up to 10 participants',
            'Core AI tools overview',
            'Digital workbook included',
            '30-day email support'
          ]
        },
        {
          name: 'Professional',
          price: '€999',
          description: '3-day comprehensive bootcamp',
          features: [
            '3 full days of training',
            'Up to 20 participants',
            'Advanced techniques & tools',
            'Custom use case development',
            'Certification included',
            '90-day email & chat support'
          ],
          highlighted: true
        },
        {
          name: 'Enterprise',
          price: 'Custom',
          description: 'Ongoing training program',
          features: [
            'Custom schedule & duration',
            'Unlimited participants',
            'Industry-specific curriculum',
            'One-on-one coaching sessions',
            'Annual refresher training',
            'Dedicated Slack channel'
          ]
        }
      ],
      faqs: [
        {
          question: 'Do we need prior AI experience?',
          answer: 'No prior experience needed. We tailor the content to your team\'s current skill level, from complete beginners to those looking to advance their knowledge.'
        },
        {
          question: 'Can the training be done remotely?',
          answer: 'Yes! We offer both in-person and virtual training sessions. Virtual workshops use interactive platforms with breakout rooms and hands-on exercises.'
        },
        {
          question: 'What tools do participants need?',
          answer: 'Just a computer with internet access. We provide access to all necessary AI tools and platforms during the training.'
        },
        {
          question: 'Is there a refund policy?',
          answer: 'Yes, we offer a 100% satisfaction guarantee. If you\'re not satisfied after the first session, we\'ll provide a full refund.'
        }
      ]
    }
  },
  {
    id: 'automation',
    number: '02',
    title: 'AUTOMATION',
    panelTitle: 'Workflow Automation',
    description: 'We design systems that eliminate busywork—so your team can focus on what matters.',
    cta: 'Learn More',
    image: '/images/automation_portrait.jpg',
    details: {
      overview: 'Transform repetitive tasks into automated workflows. We identify bottlenecks, design intelligent automation systems, and integrate tools to save your team hours every week.',
      benefits: [
        'Save 15-30 hours per week on manual tasks',
        'Reduce human error by up to 90%',
        'Real-time data sync across platforms',
        'Scalable solutions that grow with you'
      ],
      features: [
        {
          icon: 'Workflow',
          title: 'Process Mapping',
          description: 'Analyze your workflows to identify automation opportunities and pain points'
        },
        {
          icon: 'Zap',
          title: 'Multi-Platform Integration',
          description: 'Connect Zapier, Make, n8n, and custom APIs for seamless data flow'
        },
        {
          icon: 'Database',
          title: 'Data Synchronization',
          description: 'Keep your CRM, spreadsheets, and databases perfectly in sync'
        },
        {
          icon: 'Mail',
          title: 'Email Automation',
          description: 'Intelligent email sequences, lead nurturing, and follow-up systems'
        },
        {
          icon: 'BarChart3',
          title: 'Automated Reporting',
          description: 'Generate and distribute reports automatically on schedule'
        },
        {
          icon: 'Clock',
          title: 'Scheduling Systems',
          description: 'Appointment booking, reminders, and calendar management automation'
        }
      ],
      process: [
        {
          number: '01',
          title: 'Discovery Call',
          description: 'Free 30-minute consultation to understand your current workflows'
        },
        {
          number: '02',
          title: 'Process Audit',
          description: 'Deep dive into your operations to map automation opportunities'
        },
        {
          number: '03',
          title: 'System Design',
          description: 'Create detailed automation blueprint with tool recommendations'
        },
        {
          number: '04',
          title: 'Build & Test',
          description: 'Develop automations with thorough testing and error handling'
        },
        {
          number: '05',
          title: 'Training & Launch',
          description: 'Team training and smooth transition to automated workflows'
        },
        {
          number: '06',
          title: 'Optimization',
          description: 'Ongoing monitoring and improvements for maximum efficiency'
        }
      ],
      pricing: [
        {
          name: 'Starter',
          price: '€799',
          description: 'Single workflow automation',
          features: [
            'One automated workflow',
            'Up to 3 tool integrations',
            'Basic error handling',
            'Documentation included',
            '60-day support'
          ]
        },
        {
          name: 'Growth',
          price: '€1,999',
          description: 'Comprehensive automation suite',
          features: [
            '5-8 automated workflows',
            'Unlimited tool integrations',
            'Advanced error handling & alerts',
            'Custom dashboard',
            'Team training session',
            '6-month priority support'
          ],
          highlighted: true
        },
        {
          name: 'Enterprise',
          price: 'Custom',
          description: 'Full business automation',
          features: [
            'Unlimited workflows',
            'Custom API development',
            'Dedicated automation specialist',
            'Monthly optimization reviews',
            'White-glove support',
            'SLA guarantee'
          ]
        }
      ],
      faqs: [
        {
          question: 'How long does implementation take?',
          answer: 'Simple workflows can be live in 1-2 weeks. Complex multi-system automations typically take 4-6 weeks from discovery to launch.'
        },
        {
          question: 'What if our tools aren\'t compatible?',
          answer: 'We work with 3,000+ apps and can build custom API integrations for proprietary systems. There\'s almost always a solution.'
        },
        {
          question: 'What happens if an automation breaks?',
          answer: 'All automations include error monitoring and alerts. We provide support to quickly diagnose and fix any issues that arise.'
        },
        {
          question: 'Can we modify automations later?',
          answer: 'Absolutely! We build flexible systems and provide documentation so you can make simple changes, or we can handle updates for you.'
        }
      ]
    }
  },
  {
    id: 'chatbots',
    number: '03',
    title: 'CHATBOTS',
    panelTitle: 'Custom AI Chatbots',
    description: '24/7 support, lead qualification, and booking—trained on your business, not generic answers.',
    cta: 'Learn More',
    image: '/images/chatbots_portrait.jpg',
    details: {
      overview: 'Deploy intelligent AI chatbots that understand your business, answer customer questions accurately, and convert visitors into leads. Available 24/7 across multiple platforms.',
      benefits: [
        'Respond to customers instantly, any time of day',
        'Qualify leads before they reach your sales team',
        'Reduce support tickets by 60-80%',
        'Integrate with your existing tools and databases'
      ],
      features: [
        {
          icon: 'MessageSquare',
          title: 'Natural Conversations',
          description: 'GPT-4 powered responses that feel human and understand context'
        },
        {
          icon: 'Brain',
          title: 'Custom Training',
          description: 'Trained on your website, docs, FAQs, and business knowledge'
        },
        {
          icon: 'Globe',
          title: 'Multi-Platform',
          description: 'Deploy on website, WhatsApp, Messenger, Slack, or SMS'
        },
        {
          icon: 'Users',
          title: 'Lead Qualification',
          description: 'Collect info, qualify prospects, and route to the right team member'
        },
        {
          icon: 'Calendar',
          title: 'Appointment Booking',
          description: 'Schedule meetings directly through the chat interface'
        },
        {
          icon: 'Shield',
          title: 'Data Security',
          description: 'Enterprise-grade encryption with GDPR compliance'
        }
      ],
      process: [
        {
          number: '01',
          title: 'Strategy Session',
          description: 'Define use cases, conversation flows, and success metrics'
        },
        {
          number: '02',
          title: 'Knowledge Training',
          description: 'Feed the AI your business information, FAQs, and brand voice'
        },
        {
          number: '03',
          title: 'Bot Development',
          description: 'Build conversation logic, integrations, and fallback responses'
        },
        {
          number: '04',
          title: 'Testing & Refinement',
          description: 'Rigorous testing with real scenarios and edge cases'
        },
        {
          number: '05',
          title: 'Deployment',
          description: 'Launch on your platforms with monitoring and analytics'
        },
        {
          number: '06',
          title: 'Continuous Learning',
          description: 'Regular updates based on conversation data and feedback'
        }
      ],
      pricing: [
        {
          name: 'Basic',
          price: '€999',
          description: 'Setup + €149/month',
          features: [
            'Website chat widget',
            'Up to 1,000 conversations/month',
            'FAQ and basic support',
            'Email integration',
            'Basic analytics dashboard',
            'Monthly performance report'
          ]
        },
        {
          name: 'Professional',
          price: '€1,799',
          description: 'Setup + €299/month',
          features: [
            'Multi-platform deployment',
            'Up to 5,000 conversations/month',
            'Lead qualification logic',
            'CRM integration',
            'Appointment booking',
            'Advanced analytics',
            'Quarterly training updates'
          ],
          highlighted: true
        },
        {
          name: 'Enterprise',
          price: 'Custom',
          description: 'Setup + Custom pricing',
          features: [
            'Unlimited conversations',
            'Custom AI model training',
            'Multi-language support',
            'Advanced integrations',
            'Dedicated account manager',
            'Priority support',
            'Custom SLA'
          ]
        }
      ],
      faqs: [
        {
          question: 'How accurate are the chatbot responses?',
          answer: 'Our chatbots are typically 90-95% accurate for questions within their training scope. For unknown questions, they gracefully hand off to a human or collect contact info.'
        },
        {
          question: 'Can it handle multiple conversations at once?',
          answer: 'Yes! The chatbot can handle unlimited simultaneous conversations without any degradation in quality or response time.'
        },
        {
          question: 'What happens if the bot doesn\'t know the answer?',
          answer: 'The bot is programmed to admit uncertainty and either collect the visitor\'s info for follow-up or seamlessly transfer to a human agent.'
        },
        {
          question: 'How long does setup take?',
          answer: 'Basic chatbots can be live in 2-3 weeks. More complex implementations with advanced integrations typically take 4-6 weeks.'
        }
      ]
    }
  },
  {
    id: 'webdesign',
    number: '04',
    title: 'WEB DESIGN',
    panelTitle: 'Intelligent Web Design',
    description: 'Fast, accessible, conversion-focused sites—built with modern tools and clean architecture.',
    cta: 'Learn More',
    image: '/images/webdesign_portrait.jpg',
    details: {
      overview: 'Build stunning, high-performance websites that convert visitors into customers. We combine modern design principles with cutting-edge technology to create sites that load fast, rank well, and drive results.',
      benefits: [
        'Lightning-fast page loads (under 2 seconds)',
        'Mobile-first responsive design',
        'SEO-optimized from day one',
        'Full ownership of code and content'
      ],
      features: [
        {
          icon: 'Palette',
          title: 'Conversion-Focused Design',
          description: 'Every element designed to guide visitors toward your business goals'
        },
        {
          icon: 'Zap',
          title: 'Modern Tech Stack',
          description: 'React, Next.js, Tailwind CSS, and other cutting-edge frameworks'
        },
        {
          icon: 'Smartphone',
          title: 'Responsive & Accessible',
          description: 'Perfect on all devices with WCAG 2.1 accessibility compliance'
        },
        {
          icon: 'Search',
          title: 'SEO Optimization',
          description: 'Built-in best practices for search engine visibility'
        },
        {
          icon: 'BarChart3',
          title: 'Analytics Integration',
          description: 'Track visitor behavior with Google Analytics, Plausible, or custom dashboards'
        },
        {
          icon: 'Lock',
          title: 'Security First',
          description: 'SSL, secure hosting, and protection against common vulnerabilities'
        }
      ],
      process: [
        {
          number: '01',
          title: 'Discovery & Strategy',
          description: 'Understand your business goals, target audience, and success metrics'
        },
        {
          number: '02',
          title: 'Wireframes & Planning',
          description: 'Create site structure and user flow diagrams for approval'
        },
        {
          number: '03',
          title: 'Visual Design',
          description: 'Design mockups that reflect your brand and convert visitors'
        },
        {
          number: '04',
          title: 'Development',
          description: 'Build with clean code, testing across all devices and browsers'
        },
        {
          number: '05',
          title: 'Content & SEO',
          description: 'Optimize content, metadata, and technical SEO elements'
        },
        {
          number: '06',
          title: 'Launch & Support',
          description: 'Deploy to production with monitoring and ongoing maintenance'
        }
      ],
      pricing: [
        {
          name: 'Landing Page',
          price: '€999',
          description: 'Single high-converting page',
          features: [
            '1 custom landing page',
            'Mobile responsive design',
            'Contact form integration',
            'Basic SEO setup',
            'Google Analytics',
            '30-day support'
          ]
        },
        {
          name: 'Business Site',
          price: '€2,999',
          description: '5-10 page professional website',
          features: [
            'Custom design & branding',
            'Up to 10 pages',
            'Content management system',
            'Advanced SEO',
            'Performance optimization',
            'Email integration',
            '3-month support & updates'
          ],
          highlighted: true
        },
        {
          name: 'Enterprise',
          price: 'Custom',
          description: 'Complex web applications',
          features: [
            'Unlimited pages',
            'Custom functionality',
            'User authentication',
            'Database integration',
            'API development',
            'Ongoing maintenance',
            'Dedicated support team'
          ]
        }
      ],
      faqs: [
        {
          question: 'Do you provide hosting?',
          answer: 'We can set up hosting for you on platforms like Vercel, Netlify, or AWS, or work with your existing hosting provider. Hosting costs are separate from design fees.'
        },
        {
          question: 'Can I update the site myself?',
          answer: 'Yes! We can integrate a CMS like WordPress, Sanity, or Contentful, and provide training so you can update content without coding.'
        },
        {
          question: 'What if I need changes after launch?',
          answer: 'All projects include a support period. After that, we offer maintenance plans starting at €99/month for updates, security, and performance monitoring.'
        },
        {
          question: 'How long does a project take?',
          answer: 'Landing pages: 2-3 weeks. Business websites: 6-8 weeks. Complex applications: 3-6 months. Timeline depends on scope and content readiness.'
        }
      ]
    }
  }
];
