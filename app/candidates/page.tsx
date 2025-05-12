'use client';

import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { UserCircle2, Search, ChevronDown, GraduationCap, Briefcase, Users, Gavel, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from '../components/ui/dialog';
import { Badge } from '../components/ui/badge';

interface Candidate {
  id: string;
  name: string;
  position: string;
  party: string;
  age: number;
  image: string;
  education: {
    level: string;
    school: string;
    course: string;
    year: string;
  }[];
  experience: {
    position: string;
    years: string;
    achievements: string[];
  }[];
  family: {
    name: string;
    relation: string;
    position: string;
  }[];
  legislation: {
    title: string;
    year: string;
    status: string;
    description: string;
  }[];
  platforms: {
    category: string;
    items: string[];
  }[];
  criminalRecord: {
    case: string;
    year: string;
    status: string;
  }[];
}

// Mock candidates data
const mockCandidates: Candidate[] = [
  // National Candidates
  {
    id: 'nat-1',
    name: 'Maria Santos Cruz',
    position: 'President',
    party: 'United Progressive Party',
    age: 55,
    image: '/api/placeholder/200/200',
    education: [
      {
        level: 'Bachelor\'s Degree',
        school: 'University of the Philippines',
        course: 'Political Science',
        year: '1991'
      },
      {
        level: 'Master\'s Degree',
        school: 'Ateneo de Manila University',
        course: 'Public Administration',
        year: '1995'
      }
    ],
    experience: [
      {
        position: 'Senator',
        years: '2016-2022',
        achievements: [
          'Authored 15 bills that became laws',
          'Chaired Committee on Education',
          'Perfect attendance record'
        ]
      },
      {
        position: 'Governor of Laguna',
        years: '2010-2016',
        achievements: [
          'Reduced poverty rate by 15%',
          'Built 50 new schools',
          'Improved healthcare access'
        ]
      }
    ],
    family: [
      {
        name: 'Juan Cruz',
        relation: 'Father',
        position: 'Former Mayor of Calamba'
      },
      {
        name: 'Ana Santos-Cruz',
        relation: 'Sister',
        position: 'Current Congresswoman, 3rd District Laguna'
      }
    ],
    legislation: [
      {
        title: 'Universal Healthcare Act',
        year: '2019',
        status: 'Passed',
        description: 'Provides healthcare coverage for all Filipinos'
      },
      {
        title: 'Education Reform Act',
        year: '2020',
        status: 'Passed',
        description: 'Increased teacher salaries and modernized curriculum'
      }
    ],
    platforms: [
      {
        category: 'Economy',
        items: [
          'Increase minimum wage to ₱750/day',
          'Support small and medium enterprises',
          'Reduce corporate tax for startups'
        ]
      },
      {
        category: 'Education',
        items: [
          'Free college education for all',
          'Laptop for every student',
          'Teacher salary increase by 50%'
        ]
      },
      {
        category: 'Healthcare',
        items: [
          'Build 100 new hospitals',
          'Free medicines for seniors',
          'Mental health programs in all schools'
        ]
      }
    ],
    criminalRecord: []
  },
  {
    id: 'nat-2',
    name: 'Roberto "Bobby" Reyes',
    position: 'President',
    party: 'People\'s Democratic Alliance',
    age: 62,
    image: '/api/placeholder/200/200',
    education: [
      {
        level: 'Bachelor\'s Degree',
        school: 'De La Salle University',
        course: 'Economics',
        year: '1984'
      },
      {
        level: 'MBA',
        school: 'Harvard Business School',
        course: 'Business Administration',
        year: '1988'
      }
    ],
    experience: [
      {
        position: 'Secretary of Finance',
        years: '2016-2022',
        achievements: [
          'Balanced national budget',
          'Increased tax collection by 30%',
          'Reduced national debt'
        ]
      },
      {
        position: 'CEO, Philippine National Bank',
        years: '2005-2016',
        achievements: [
          'Doubled bank assets',
          'Expanded to rural areas',
          'Launched digital banking'
        ]
      }
    ],
    family: [
      {
        name: 'Carlos Reyes',
        relation: 'Brother',
        position: 'Mayor of Makati City'
      }
    ],
    legislation: [],
    platforms: [
      {
        category: 'Economy',
        items: [
          'Attract foreign investments',
          'Build tech hubs in provinces',
          'Zero tax for minimum wage earners'
        ]
      },
      {
        category: 'Infrastructure',
        items: [
          'Build subway systems in major cities',
          'Modernize airports',
          'High-speed rail Manila to Clark'
        ]
      },
      {
        category: 'Agriculture',
        items: [
          'Subsidize farming equipment',
          'Direct market access for farmers',
          'Crop insurance program'
        ]
      }
    ],
    criminalRecord: [
      {
        case: 'Tax evasion',
        year: '2010',
        status: 'Acquitted'
      }
    ]
  },
  {
    id: 'nat-3',
    name: 'Dr. Elena Villanueva',
    position: 'Vice President',
    party: 'United Progressive Party',
    age: 48,
    image: '/api/placeholder/200/200',
    education: [
      {
        level: 'Bachelor\'s Degree',
        school: 'University of Santo Tomas',
        course: 'Medicine',
        year: '1998'
      },
      {
        level: 'Specialization',
        school: 'Philippine General Hospital',
        course: 'Public Health',
        year: '2002'
      }
    ],
    experience: [
      {
        position: 'Secretary of Health',
        years: '2019-2022',
        achievements: [
          'Managed COVID-19 response',
          'Increased hospital bed capacity by 40%',
          'Launched mental health hotline'
        ]
      },
      {
        position: 'Director, DOH Region IV',
        years: '2010-2019',
        achievements: [
          'Eliminated dengue in 5 provinces',
          'Established 20 rural health units',
          'Trained 1,000 health workers'
        ]
      }
    ],
    family: [],
    legislation: [],
    platforms: [
      {
        category: 'Healthcare',
        items: [
          'One barangay, one health center',
          'Free annual checkups',
          'Pandemic preparedness fund'
        ]
      },
      {
        category: 'Women\'s Rights',
        items: [
          'Extended maternity leave',
          'Women\'s crisis centers nationwide',
          'Equal pay legislation'
        ]
      }
    ],
    criminalRecord: []
  },
  {
    id: 'nat-4',
    name: 'Senator Ramon Aquino III',
    position: 'Senator',
    party: 'Nationalist Coalition',
    age: 58,
    image: '/api/placeholder/200/200',
    education: [
      {
        level: 'Bachelor\'s Degree',
        school: 'University of the Philippines',
        course: 'Law',
        year: '1988'
      },
      {
        level: 'Master\'s Degree',
        school: 'Yale University',
        course: 'International Relations',
        year: '1992'
      }
    ],
    experience: [
      {
        position: 'Congressman, Bulacan 2nd District',
        years: '2010-2019',
        achievements: [
          'Authored Anti-Corruption Act',
          'Built 30 schools in district',
          'Improved farm-to-market roads'
        ]
      },
      {
        position: 'Provincial Board Member',
        years: '2004-2010',
        achievements: [
          'Environmental protection ordinances',
          'Youth development programs',
          'Disaster preparedness initiatives'
        ]
      }
    ],
    family: [
      {
        name: 'Ramon Aquino Jr.',
        relation: 'Father',
        position: 'Former Senator (1992-2004)'
      },
      {
        name: 'Corazon Aquino',
        relation: 'Aunt',
        position: 'Former President'
      }
    ],
    legislation: [
      {
        title: 'Anti-Political Dynasty Bill',
        year: '2022',
        status: 'Pending',
        description: 'Limits political families to one elective position'
      },
      {
        title: 'Internet Freedom Act',
        year: '2021',
        status: 'Passed',
        description: 'Ensures affordable internet access nationwide'
      }
    ],
    platforms: [
      {
        category: 'Good Governance',
        items: [
          'Strengthen anti-corruption agencies',
          'Transparent government spending',
          'Citizens\' participation in budgeting'
        ]
      },
      {
        category: 'Digital Transformation',
        items: [
          'E-governance for all agencies',
          'Digital ID system',
          'Online government services'
        ]
      },
      {
        category: 'Justice Reform',
        items: [
          'Speed up court proceedings',
          'Legal aid for the poor',
          'Modernize justice system'
        ]
      }
    ],
    criminalRecord: []
  },
  {
    id: 'nat-5',
    name: 'Senator Margarita "Marga" Dela Rosa',
    position: 'Senator',
    party: 'Progressive Alliance',
    age: 52,
    image: '/api/placeholder/200/200',
    education: [
      {
        level: 'Bachelor\'s Degree',
        school: 'Ateneo de Manila University',
        course: 'Social Sciences',
        year: '1994'
      },
      {
        level: 'Master\'s Degree',
        school: 'London School of Economics',
        course: 'Development Studies',
        year: '1998'
      }
    ],
    experience: [
      {
        position: 'Undersecretary, DSWD',
        years: '2016-2019',
        achievements: [
          'Implemented 4Ps expansion program',
          'Reduced child malnutrition by 20%',
          'Established 100 daycare centers'
        ]
      },
      {
        position: 'NGO Director, Child Rights Foundation',
        years: '2005-2016',
        achievements: [
          'Rescued 1,000 child laborers',
          'Built 50 schools in remote areas',
          'Advocated for children\'s rights laws'
        ]
      }
    ],
    family: [],
    legislation: [
      {
        title: 'Universal Child Care Act',
        year: '2021',
        status: 'Passed',
        description: 'Free daycare services for all working parents'
      },
      {
        title: 'Anti-Child Labor Act',
        year: '2022',
        status: 'Passed',
        description: 'Stricter penalties for child labor violations'
      }
    ],
    platforms: [
      {
        category: 'Social Welfare',
        items: [
          'Universal child care program',
          'Expand 4Ps coverage',
          'Senior citizen pension increase'
        ]
      },
      {
        category: 'Women and Children',
        items: [
          'Protection centers in every city',
          'Free legal aid for abuse victims',
          'Mandatory sex education'
        ]
      },
      {
        category: 'Labor',
        items: [
          'End contractualization',
          'Maternity leave extension',
          'OFW protection services'
        ]
      }
    ],
    criminalRecord: []
  },
  {
    id: 'nat-6',
    name: 'Senator Carlos "Caloy" Mendoza',
    position: 'Senator',
    party: 'Nationalist Coalition',
    age: 65,
    image: '/api/placeholder/200/200',
    education: [
      {
        level: 'Bachelor\'s Degree',
        school: 'University of Santo Tomas',
        course: 'Civil Engineering',
        year: '1981'
      },
      {
        level: 'Master\'s Degree',
        school: 'Asian Institute of Management',
        course: 'Business Administration',
        year: '1985'
      }
    ],
    experience: [
      {
        position: 'Secretary of Public Works',
        years: '2013-2019',
        achievements: [
          'Build Build Build program implementation',
          'Completed 10,000 km of roads',
          'Built 100 bridges nationwide'
        ]
      },
      {
        position: 'Mayor of Davao del Sur',
        years: '2001-2013',
        achievements: [
          'Zero flooding achievement',
          'Best LGU award 5 times',
          'Model city for infrastructure'
        ]
      }
    ],
    family: [
      {
        name: 'Roberto Mendoza',
        relation: 'Son',
        position: 'Governor of Davao del Sur'
      }
    ],
    legislation: [
      {
        title: 'National Infrastructure Act',
        year: '2021',
        status: 'Passed',
        description: '1 trillion peso infrastructure fund'
      }
    ],
    platforms: [
      {
        category: 'Infrastructure',
        items: [
          'Connect all islands with bridges',
          'Airport in every province',
          'Nationwide fiber optic network'
        ]
      },
      {
        category: 'Transportation',
        items: [
          'Free public transport for students',
          'Railway system expansion',
          'Port modernization program'
        ]
      }
    ],
    criminalRecord: []
  },
  {
    id: 'nat-7',
    name: 'Senator Julia "Julie" Tan',
    position: 'Senator',
    party: 'United Progressive Party',
    age: 43,
    image: '/api/placeholder/200/200',
    education: [
      {
        level: 'Bachelor\'s Degree',
        school: 'University of the Philippines',
        course: 'Environmental Science',
        year: '2003'
      },
      {
        level: 'PhD',
        school: 'Stanford University',
        course: 'Climate Science',
        year: '2009'
      }
    ],
    experience: [
      {
        position: 'Climate Change Commissioner',
        years: '2016-2022',
        achievements: [
          'Paris Agreement implementation',
          'Renewable energy increased 30%',
          'Banned single-use plastics'
        ]
      },
      {
        position: 'Environmental Advocate',
        years: '2009-2016',
        achievements: [
          'Stopped 5 mining projects',
          'Protected 1M hectares of forest',
          'Led climate strikes'
        ]
      }
    ],
    family: [],
    legislation: [
      {
        title: 'Green New Deal Act',
        year: '2023',
        status: 'Pending',
        description: 'Transition to 100% renewable energy by 2035'
      },
      {
        title: 'Environmental Protection Act',
        year: '2022',
        status: 'Passed',
        description: 'Stricter penalties for environmental crimes'
      }
    ],
    platforms: [
      {
        category: 'Environment',
        items: [
          'Carbon neutrality by 2040',
          'Reforestation of 10M hectares',
          'Zero waste cities program'
        ]
      },
      {
        category: 'Energy',
        items: [
          'Solar panels for every home',
          'Wind farms in coastal areas',
          'Phase out coal plants'
        ]
      },
      {
        category: 'Sustainability',
        items: [
          'Green jobs program',
          'Eco-tourism development',
          'Sustainable agriculture'
        ]
      }
    ],
    criminalRecord: []
  },
  {
    id: 'nat-8',
    name: 'Senator Miguel "Mike" Santiago',
    position: 'Senator',
    party: 'People\'s Democratic Alliance',
    age: 56,
    image: '/api/placeholder/200/200',
    education: [
      {
        level: 'Bachelor\'s Degree',
        school: 'Far Eastern University',
        course: 'Journalism',
        year: '1990'
      },
      {
        level: 'Law Degree',
        school: 'San Beda College',
        course: 'Juris Doctor',
        year: '1994'
      }
    ],
    experience: [
      {
        position: 'Press Secretary',
        years: '2010-2016',
        achievements: [
          'FOI implementation',
          'Media freedom advocate',
          'Transparency reforms'
        ]
      },
      {
        position: 'Broadcast Journalist',
        years: '1990-2010',
        achievements: [
          'Exposed corruption scandals',
          'Award-winning investigative reports',
          'Press freedom fighter'
        ]
      }
    ],
    family: [],
    legislation: [
      {
        title: 'Media Freedom Act',
        year: '2023',
        status: 'Passed',
        description: 'Protection for journalists from harassment'
      },
      {
        title: 'Right to Information Act',
        year: '2022',
        status: 'Passed',
        description: 'Expanded FOI to all government agencies'
      }
    ],
    platforms: [
      {
        category: 'Media and Information',
        items: [
          'Internet as a basic right',
          'Combat fake news',
          'Media literacy education'
        ]
      },
      {
        category: 'Transparency',
        items: [
          'Live stream all government meetings',
          'Open data portal',
          'Citizen feedback system'
        ]
      },
      {
        category: 'Digital Rights',
        items: [
          'Data privacy protection',
          'Cybersecurity program',
          'Digital democracy platform'
        ]
      }
    ],
    criminalRecord: [
      {
        case: 'Libel',
        year: '2008',
        status: 'Dismissed'
      }
    ]
  },
  {
    id: 'nat-9',
    name: 'Senator Luz "Lucy" Villegas',
    position: 'Senator',
    party: 'Progressive Alliance',
    age: 49,
    image: '/api/placeholder/200/200',
    education: [
      {
        level: 'Bachelor\'s Degree',
        school: 'Silliman University',
        course: 'Education',
        year: '1997'
      },
      {
        level: 'Master\'s Degree',
        school: 'Teachers College, Columbia University',
        course: 'Educational Leadership',
        year: '2002'
      }
    ],
    experience: [
      {
        position: 'DepEd Undersecretary',
        years: '2016-2022',
        achievements: [
          'K-12 implementation success',
          'Teacher salary increase',
          'Built 5,000 classrooms'
        ]
      },
      {
        position: 'School Principal',
        years: '2005-2016',
        achievements: [
          'Transformed failing school',
          '100% literacy achievement',
          'Model STEM program'
        ]
      }
    ],
    family: [],
    legislation: [
      {
        title: 'Teachers Welfare Act',
        year: '2023',
        status: 'Passed',
        description: 'Doubled teacher salaries and benefits'
      },
      {
        title: 'Universal Pre-School Act',
        year: '2024',
        status: 'Pending',
        description: 'Free pre-school education for all'
      }
    ],
    platforms: [
      {
        category: 'Education',
        items: [
          'One tablet per student',
          'Free internet in schools',
          'Mental health counselors'
        ]
      },
      {
        category: 'Teachers',
        items: [
          'Housing program for teachers',
          'Continuous professional development',
          'Performance-based incentives'
        ]
      },
      {
        category: 'Curriculum',
        items: [
          'Financial literacy subject',
          'Coding for all students',
          'Arts and sports programs'
        ]
      }
    ],
    criminalRecord: []
  },
  {
    id: 'nat-10',
    name: 'Senator Fernando "Ferdie" Lim',
    position: 'Senator',
    party: 'Nationalist Coalition',
    age: 60,
    image: '/api/placeholder/200/200',
    education: [
      {
        level: 'Bachelor\'s Degree',
        school: 'Mapua University',
        course: 'Computer Engineering',
        year: '1986'
      },
      {
        level: 'Master\'s Degree',
        school: 'MIT',
        course: 'Computer Science',
        year: '1990'
      }
    ],
    experience: [
      {
        position: 'DICT Secretary',
        years: '2016-2022',
        achievements: [
          'National broadband project',
          'Free WiFi in public places',
          'E-governance implementation'
        ]
      },
      {
        position: 'Tech CEO, TechPhil Inc.',
        years: '1995-2016',
        achievements: [
          'Created 10,000 tech jobs',
          'First Filipino unicorn startup',
          'Tech education programs'
        ]
      }
    ],
    family: [],
    legislation: [
      {
        title: 'Digital Philippines Act',
        year: '2023',
        status: 'Passed',
        description: 'National digital transformation roadmap'
      },
      {
        title: 'Cybercrime Prevention Act',
        year: '2022',
        status: 'Passed',
        description: 'Updated penalties for cyber crimes'
      }
    ],
    platforms: [
      {
        category: 'Technology',
        items: [
          'Tech hub in every region',
          'Coding bootcamps for youth',
          'Startup incubation programs'
        ]
      },
      {
        category: 'Digital Infrastructure',
        items: [
          '5G network nationwide',
          'Smart cities program',
          'Blockchain for government'
        ]
      },
      {
        category: 'Innovation',
        items: [
          'R&D tax incentives',
          'Patent fast-track system',
          'STEM scholarship expansion'
        ]
      }
    ],
    criminalRecord: []
  },
  {
    id: 'nat-11',
    name: 'Senator Isabel "Isa" Garcia',
    position: 'Senator',
    party: 'United Progressive Party',
    age: 46,
    image: '/api/placeholder/200/200',
    education: [
      {
        level: 'Bachelor\'s Degree',
        school: 'Miriam College',
        course: 'Women\'s Studies',
        year: '2001'
      },
      {
        level: 'Law Degree',
        school: 'University of the Philippines',
        course: 'Juris Doctor',
        year: '2005'
      }
    ],
    experience: [
      {
        position: 'Commissioner, CHR',
        years: '2016-2022',
        achievements: [
          'Handled 10,000 human rights cases',
          'Gender equality programs',
          'Anti-discrimination policies'
        ]
      },
      {
        position: 'Women\'s Rights Lawyer',
        years: '2005-2016',
        achievements: [
          'Won landmark gender cases',
          'Free legal aid for women',
          'Domestic violence advocacy'
        ]
      }
    ],
    family: [],
    legislation: [
      {
        title: 'Gender Equality Act',
        year: '2023',
        status: 'Passed',
        description: 'Comprehensive anti-discrimination law'
      },
      {
        title: 'SOGIE Equality Act',
        year: '2024',
        status: 'Pending',
        description: 'Protection for LGBTQ+ rights'
      }
    ],
    platforms: [
      {
        category: 'Gender Rights',
        items: [
          'Equal pay enforcement',
          'Women in leadership quotas',
          'Anti-harassment hotline'
        ]
      },
      {
        category: 'Human Rights',
        items: [
          'Strengthen CHR mandate',
          'Witness protection program',
          'Justice system reform'
        ]
      },
      {
        category: 'Social Justice',
        items: [
          'Free legal aid expansion',
          'Community paralegal training',
          'Rights education in schools'
        ]
      }
    ],
    criminalRecord: []
  },
  {
    id: 'nat-12',
    name: 'Senator Pedro "Pete" Navarro',
    position: 'Senator',
    party: 'People\'s Democratic Alliance',
    age: 63,
    image: '/api/placeholder/200/200',
    education: [
      {
        level: 'Bachelor\'s Degree',
        school: 'Xavier University',
        course: 'Agriculture',
        year: '1983'
      },
      {
        level: 'Master\'s Degree',
        school: 'UPLB',
        course: 'Agricultural Economics',
        year: '1987'
      }
    ],
    experience: [
      {
        position: 'Secretary of Agriculture',
        years: '2010-2016',
        achievements: [
          'Rice self-sufficiency program',
          'Farmer insurance system',
          'Modern farming techniques'
        ]
      },
      {
        position: 'Provincial Agriculturist',
        years: '1990-2010',
        achievements: [
          'Cooperative development',
          'High-value crops program',
          'Irrigation projects'
        ]
      }
    ],
    family: [],
    legislation: [
      {
        title: 'Farmer Protection Act',
        year: '2023',
        status: 'Passed',
        description: 'Minimum support price for crops'
      },
      {
        title: 'Agricultural Modernization Act',
        year: '2022',
        status: 'Passed',
        description: 'Mechanization and technology support'
      }
    ],
    platforms: [
      {
        category: 'Agriculture',
        items: [
          'Zero interest loans for farmers',
          'Cold storage facilities',
          'Direct market linkages'
        ]
      },
      {
        category: 'Rural Development',
        items: [
          'Farm-to-market roads',
          'Rural health centers',
          'Agri-tourism promotion'
        ]
      },
      {
        category: 'Food Security',
        items: [
          'National food reserve',
          'Urban farming program',
          'School feeding expansion'
        ]
      }
    ],
    criminalRecord: []
  },
  // Local Candidates
  {
    id: 'local-1',
    name: 'Antonio "Tony" Dela Cruz',
    position: 'Mayor of Manila',
    party: 'Local Progress Movement',
    age: 45,
    image: '/api/placeholder/200/200',
    education: [
      {
        level: 'Bachelor\'s Degree',
        school: 'Polytechnic University of the Philippines',
        course: 'Civil Engineering',
        year: '2001'
      }
    ],
    experience: [
      {
        position: 'Vice Mayor of Manila',
        years: '2019-2022',
        achievements: [
          'Led flood control projects',
          'Modernized public markets',
          'Established youth programs'
        ]
      },
      {
        position: 'Barangay Captain, Sampaloc',
        years: '2013-2019',
        achievements: [
          'Zero crime rate achievement',
          'Built community center',
          '24/7 health clinic'
        ]
      }
    ],
    family: [
      {
        name: 'Rosa Dela Cruz',
        relation: 'Mother',
        position: 'Former Councilor'
      }
    ],
    legislation: [],
    platforms: [
      {
        category: 'Urban Development',
        items: [
          'Modernize Divisoria market',
          'Build vertical housing projects',
          'Improve drainage systems'
        ]
      },
      {
        category: 'Transportation',
        items: [
          'More bus routes',
          'Bike lanes on major roads',
          'E-jeepney program'
        ]
      },
      {
        category: 'Education',
        items: [
          'Scholarship for Manila students',
          'Computer labs in all schools',
          'Technical-vocational programs'
        ]
      }
    ],
    criminalRecord: []
  },
  {
    id: 'local-2',
    name: 'Councilor Patricia "Pat" Gonzales',
    position: 'Councilor, District 3 Manila',
    party: 'Independent',
    age: 35,
    image: '/api/placeholder/200/200',
    education: [
      {
        level: 'Bachelor\'s Degree',
        school: 'University of the East',
        course: 'Social Work',
        year: '2011'
      }
    ],
    experience: [
      {
        position: 'Social Welfare Officer',
        years: '2011-2019',
        achievements: [
          'Assisted 5,000 families',
          'Organized feeding programs',
          'Youth detention rehabilitation'
        ]
      }
    ],
    family: [],
    legislation: [],
    platforms: [
      {
        category: 'Social Services',
        items: [
          'Free daycare centers',
          'Senior citizen assistance',
          'PWD employment program'
        ]
      },
      {
        category: 'Community Safety',
        items: [
          'CCTV in all streets',
          'Community police program',
          'Anti-drug campaigns'
        ]
      }
    ],
    criminalRecord: []
  }
];

export default function Candidates() {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(null);

  const positions = ['all', 'President', 'Vice President', 'Senator', 'Mayor of Manila', 'Councilor, District 3 Manila'];

  const filteredCandidates = mockCandidates.filter(candidate => {
    const matchesFilter = filter === 'all' || candidate.position === filter;
    const matchesSearch = candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         candidate.party.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         candidate.position.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="py-16 md:py-24 flex-grow">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center gradient-text">
            2025 Philippine Elections Candidates
          </h1>

          {/* Search and Filter Section */}
          <div className="mb-8 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--neutral-400)] w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search candidates by name, party, or position..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)] bg-white"
                />
              </div>
              <div className="relative">
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="appearance-none pl-4 pr-10 py-3 border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)] bg-white cursor-pointer"
                >
                  {positions.map(position => (
                    <option key={position} value={position}>
                      {position === 'all' ? 'All Positions' : position}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[var(--neutral-400)] w-5 h-5 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Candidates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {filteredCandidates.map(candidate => (
              <Card 
                key={candidate.id}
                className="cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                onClick={() => setSelectedCandidate(candidate)}
              >
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <UserCircle2 className="w-16 h-16 text-[var(--primary)]" />
                    <div>
                      <CardTitle className="text-lg">{candidate.name}</CardTitle>
                      <CardDescription>
                        {candidate.position}
                        <br />
                        <span className="text-xs">{candidate.party}</span>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Badge variant="secondary">Age: {candidate.age}</Badge>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[var(--neutral-600)]">
                      <GraduationCap className="w-4 h-4" />
                      <span>{candidate.education[0]?.course}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[var(--neutral-600)]">
                      <Briefcase className="w-4 h-4" />
                      <span>{candidate.experience[0]?.position}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <button className="text-[var(--primary)] font-medium hover:underline w-full text-left">
                    View Full Profile →
                  </button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Candidate Detail Modal */}
          <Dialog open={!!selectedCandidate} onOpenChange={() => setSelectedCandidate(null)}>
            {selectedCandidate && (
              <DialogContent className="max-w-4xl">
                <DialogClose onClose={() => setSelectedCandidate(null)} />
                <div className="flex items-start gap-4 mb-6">
                  <UserCircle2 className="w-24 h-24 text-[var(--primary)]" />
                  <div>
                    <h2 className="text-2xl font-bold text-[var(--primary)]">{selectedCandidate.name}</h2>
                    <p className="text-lg text-[var(--neutral-600)]">{selectedCandidate.position}</p>
                    <p className="text-[var(--neutral-500)]">{selectedCandidate.party}</p>
                    <Badge variant="secondary" className="mt-2">Age: {selectedCandidate.age}</Badge>
                  </div>
                </div>

                {/* Education */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <GraduationCap className="w-5 h-5 text-[var(--primary)]" />
                    <h3 className="text-xl font-semibold text-[var(--primary)]">Education</h3>
                  </div>
                  {selectedCandidate.education.map((edu, index) => (
                    <div key={index} className="mb-2 pl-7">
                      <p className="font-medium">{edu.level} - {edu.course}</p>
                      <p className="text-[var(--neutral-600)]">{edu.school} ({edu.year})</p>
                    </div>
                  ))}
                </div>

                {/* Experience */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Briefcase className="w-5 h-5 text-[var(--primary)]" />
                    <h3 className="text-xl font-semibold text-[var(--primary)]">Political Experience</h3>
                  </div>
                  {selectedCandidate.experience.map((exp, index) => (
                    <div key={index} className="mb-4 pl-7">
                      <p className="font-medium">{exp.position} ({exp.years})</p>
                      <ul className="list-disc list-inside text-[var(--neutral-600)] ml-4">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Family in Politics */}
                {selectedCandidate.family.length > 0 && (
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Users className="w-5 h-5 text-[var(--primary)]" />
                      <h3 className="text-xl font-semibold text-[var(--primary)]">Family in Politics</h3>
                    </div>
                    {selectedCandidate.family.map((member, index) => (
                      <div key={index} className="mb-2 pl-7">
                        <p className="font-medium">{member.name} ({member.relation})</p>
                        <p className="text-[var(--neutral-600)]">{member.position}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Legislation */}
                {selectedCandidate.legislation.length > 0 && (
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Gavel className="w-5 h-5 text-[var(--primary)]" />
                      <h3 className="text-xl font-semibold text-[var(--primary)]">Legislative Record</h3>
                    </div>
                    {selectedCandidate.legislation.map((law, index) => (
                      <div key={index} className="mb-3 pl-7">
                        <div className="flex items-center gap-2">
                          <p className="font-medium">{law.title} ({law.year})</p>
                          <Badge variant={law.status === 'Passed' ? 'default' : 'secondary'}>
                            {law.status}
                          </Badge>
                        </div>
                        <p className="text-[var(--neutral-600)]">{law.description}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Platforms */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-3 text-[var(--primary)]">Campaign Platforms</h3>
                  {selectedCandidate.platforms.map((platform, index) => (
                    <div key={index} className="mb-4">
                      <h4 className="font-medium text-lg">{platform.category}</h4>
                      <ul className="list-disc list-inside text-[var(--neutral-600)] ml-4">
                        {platform.items.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Criminal Record */}
                {selectedCandidate.criminalRecord.length > 0 && (
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <AlertCircle className="w-5 h-5 text-red-500" />
                      <h3 className="text-xl font-semibold text-red-500">Criminal Record</h3>
                    </div>
                    {selectedCandidate.criminalRecord.map((record, index) => (
                      <div key={index} className="mb-2 pl-7">
                        <p className="font-medium">{record.case} ({record.year})</p>
                        <Badge variant={record.status === 'Acquitted' ? 'secondary' : 'destructive'}>
                          Status: {record.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                )}
              </DialogContent>
            )}
          </Dialog>
        </div>
      </main>
      <Footer />
    </div>
  );
}
