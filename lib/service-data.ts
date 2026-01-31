import { Wrench, Refrigerator, WashingMachine, Wind, Microwave, Tv, ThermometerSun, Plug, Settings, Sun, LucideIcon } from 'lucide-react'

export interface Service {
  slug: string
  icon: LucideIcon
  title: string
  description: string
  fullDescription: string
  features: string[]
  commonIssues: string[]
}

export const services: Service[] = [
  {
    slug: 'refrigerator-repair',
    icon: Refrigerator,
    title: 'Refrigerator Repair',
    description: 'Expert repair for all refrigerator types including French door, side-by-side, top/bottom freezer, and commercial units. We fix cooling issues, compressor problems, ice maker repairs, and more.',
    fullDescription: 'Our expert technicians specialize in repairing all types of refrigerators, from home units to commercial-grade systems. Whether you have a French door, side-by-side, top freezer, or bottom freezer model, we have the expertise to diagnose and fix any issue quickly and efficiently.',
    features: [
      'Same-day emergency service available',
      'Repair all major brands: Samsung, LG, Whirlpool, GE, and more',
      'Genuine replacement parts guaranteed',
      '90-day warranty on all repairs',
      'Certified and experienced technicians',
      'Transparent pricing with no hidden fees'
    ],
    commonIssues: [
      'Not cooling or freezing properly',
      'Water leaking inside or underneath',
      'Ice maker not working',
      'Unusual noises or vibrations',
      'Freezer too cold or refrigerator too warm',
      'Door seal problems',
      'Compressor failure',
      'Thermostat malfunction'
    ]
  },
  {
    slug: 'washing-machine-repair',
    icon: WashingMachine,
    title: 'Washing Machine Repair',
    description: 'Complete washing machine repair services for top-load, front-load, and commercial washers. We handle drainage issues, spin cycle problems, leaks, and electrical faults.',
    fullDescription: 'From top-load to front-load washing machines, our skilled technicians can repair any make or model. We understand how essential your washing machine is to your daily routine, so we work quickly to get it back in working order.',
    features: [
      'Fast response time - usually same day',
      'Expert repair for all washing machine types',
      'Fix both mechanical and electrical issues',
      'Quality parts from authorized dealers',
      'Comprehensive warranty coverage',
      'Affordable and competitive pricing'
    ],
    commonIssues: [
      'Won\'t spin or agitate',
      'Water not draining properly',
      'Leaking water during cycles',
      'Won\'t start or power on',
      'Making loud noises or banging',
      'Door won\'t lock or unlock',
      'Clothes still wet after spin cycle',
      'Error codes displayed'
    ]
  },
  {
    slug: 'dryer-repair',
    icon: Wind,
    title: 'Dryer Repair',
    description: 'Professional dryer repair for gas and electric dryers. We fix heating issues, drum problems, ventilation, and ensure your dryer operates safely and efficiently.',
    fullDescription: 'Whether you have a gas or electric dryer, our technicians have the knowledge and tools to repair it properly. We prioritize safety and efficiency to ensure your dryer works like new.',
    features: [
      'Repair both gas and electric dryers',
      'Safety inspection included with every service',
      'Clean and check ventilation systems',
      'Replace worn belts, rollers, and heating elements',
      'Extended warranty options available',
      'Emergency service for urgent repairs'
    ],
    commonIssues: [
      'Not heating or drying clothes',
      'Takes too long to dry',
      'Drum not turning',
      'Making squeaking or thumping noises',
      'Overheating or shutting off',
      'Door won\'t stay closed',
      'Burning smell during operation',
      'Thermal fuse blown'
    ]
  },
  {
    slug: 'microwave-repair',
    icon: Microwave,
    title: 'Microwave Repair',
    description: 'Fast microwave repair services for countertop and built-in units. We repair heating elements, turntables, control panels, and door mechanisms.',
    fullDescription: 'Microwaves are convenient and essential kitchen appliances. Our technicians can quickly diagnose and repair issues with countertop, over-the-range, and built-in microwave models.',
    features: [
      'Quick turnaround time',
      'Repair or replace magnetron and heating elements',
      'Fix control panels and touchpads',
      'Door mechanism and latch repairs',
      'Safety testing after every repair',
      'Affordable flat-rate pricing'
    ],
    commonIssues: [
      'Not heating food',
      'Turntable not spinning',
      'Display not working or dim',
      'Sparking inside the microwave',
      'Door won\'t close properly',
      'Buttons not responding',
      'Unusual noises during operation',
      'Tripping circuit breaker'
    ]
  },
  {
    slug: 'oven-stove-repair',
    icon: ThermometerSun,
    title: 'Oven & Stove Repair',
    description: 'Comprehensive oven and stove repair for gas and electric models. We fix burners, igniters, thermostats, heating elements, and control boards.',
    fullDescription: 'Cooking is essential, and a broken oven or stove can disrupt your entire household. Our certified technicians repair all types of ovens and stoves, including gas ranges, electric ranges, and dual-fuel models.',
    features: [
      'Expert repair for gas and electric models',
      'Replace heating elements and igniters',
      'Calibrate thermostats for accurate cooking',
      'Fix burners, control boards, and timers',
      'Safety inspection and gas leak testing',
      'Warranty on parts and labor'
    ],
    commonIssues: [
      'Oven not heating or heating unevenly',
      'Burners not lighting or staying lit',
      'Temperature inaccurate',
      'Self-cleaning function not working',
      'Gas smell or suspected leak',
      'Control panel or display issues',
      'Door won\'t close or seal properly',
      'Igniter clicking but not lighting'
    ]
  },
  {
    slug: 'dishwasher-repair',
    icon: Tv,
    title: 'Dishwasher Repair',
    description: 'Expert dishwasher repair services. We resolve drainage issues, cleaning problems, leaks, and ensure your dishwasher runs at peak performance.',
    fullDescription: 'A dishwasher saves time and effort in the kitchen. When yours isn\'t working properly, our skilled technicians can diagnose and repair the problem efficiently, getting your dishwasher back to cleaning dishes perfectly.',
    features: [
      'Repair all dishwasher brands',
      'Fix drainage and water inlet issues',
      'Replace pumps, motors, and spray arms',
      'Resolve cleaning and drying problems',
      'Stop leaks and water damage',
      'Comprehensive testing after repairs'
    ],
    commonIssues: [
      'Not draining water',
      'Dishes not getting clean',
      'Water leaking from door or bottom',
      'Not filling with water',
      'Dishes not drying',
      'Strange noises during cycle',
      'Door latch broken',
      'Soap dispenser not opening'
    ]
  },
  {
    slug: 'air-conditioner-repair',
    icon: Wind,
    title: 'Air Conditioner Repair',
    description: 'Professional AC repair and maintenance. We fix cooling issues, compressor problems, refrigerant leaks, and electrical faults for all AC types.',
    fullDescription: 'Stay comfortable year-round with our professional air conditioner repair services. We service window units, split systems, central AC, and portable air conditioners.',
    features: [
      'Repair all AC types and brands',
      'Refrigerant recharge and leak repair',
      'Compressor and fan motor replacement',
      'Clean coils and filters',
      'Electrical troubleshooting',
      'Preventive maintenance plans available'
    ],
    commonIssues: [
      'Not cooling effectively',
      'AC unit not turning on',
      'Warm air blowing from vents',
      'Water leaking from unit',
      'Frozen coils or ice buildup',
      'Strange odors from AC',
      'Loud or unusual noises',
      'High energy bills'
    ]
  },
  {
    slug: 'freezer-repair',
    icon: Plug,
    title: 'Freezer Repair',
    description: 'Reliable freezer repair for chest freezers, upright freezers, and commercial units. We handle temperature issues, defrost problems, and compressor repairs.',
    fullDescription: 'Freezers are crucial for food preservation. Our technicians are experienced in repairing chest freezers, upright freezers, and commercial freezer units to keep your food safely frozen.',
    features: [
      'Repair residential and commercial freezers',
      'Fix temperature control issues',
      'Compressor and motor repairs',
      'Defrost system troubleshooting',
      'Seal and gasket replacement',
      'Emergency same-day service available'
    ],
    commonIssues: [
      'Not freezing or staying cold enough',
      'Frost buildup inside',
      'Freezer running constantly',
      'Making loud noises',
      'Door seal damaged or loose',
      'Compressor not running',
      'Temperature fluctuations',
      'Ice crystals on food'
    ]
  },
  {
    slug: 'general-appliance-maintenance',
    icon: Settings,
    title: 'General Appliance Maintenance',
    description: 'Preventive maintenance services to keep all your appliances running smoothly. Regular maintenance extends appliance life and prevents costly repairs.',
    fullDescription: 'Preventive maintenance is the key to extending the life of your appliances and avoiding unexpected breakdowns. Our comprehensive maintenance service covers all major household appliances.',
    features: [
      'Complete appliance inspection',
      'Clean and tune-up all components',
      'Identify potential issues early',
      'Extend appliance lifespan',
      'Improve energy efficiency',
      'Flexible maintenance schedules'
    ],
    commonIssues: [
      'Appliances aging or showing wear',
      'Decreased efficiency over time',
      'Minor issues before they become major',
      'Energy consumption increasing',
      'Unusual sounds starting to appear',
      'Performance not optimal',
      'Want to prevent future breakdowns',
      'Need pre-season checkup'
    ]
  },
  {
    slug: 'solar-system-installation',
    icon: Sun,
    title: 'Solar System Installation',
    description: 'Professional installation of solar panels, inverters, and battery storage systems. Reduce your electricity bills and embrace clean, renewable energy with our expert solar solutions.',
    fullDescription: 'Make the switch to clean, renewable energy with our professional solar system installation services. We design and install complete solar power systems tailored to your energy needs and budget.',
    features: [
      'Complete solar system design',
      'High-efficiency solar panels',
      'Quality inverters and battery storage',
      'Professional installation and setup',
      'Grid-tie and off-grid solutions',
      'ROI analysis and energy savings projections',
      'Ongoing maintenance and support',
      '25-year panel warranty'
    ],
    commonIssues: [
      'High electricity bills',
      'Frequent power outages',
      'Want energy independence',
      'Environmental concerns',
      'Rising energy costs',
      'Need backup power solution',
      'Want to reduce carbon footprint',
      'Business continuity requirements'
    ]
  }
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(service => service.slug === slug)
}

export function getAllServiceSlugs(): string[] {
  return services.map(service => service.slug)
}
