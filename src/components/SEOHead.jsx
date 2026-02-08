import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOHead = () => {
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Person",
                "name": "Ghabbara Hanene",
                "url": "https://your-domain.com",
                "image": "https://your-domain.com/profile-image.jpg",
                "sameAs": [
                    "https://github.com/your-github",
                    "https://linkedin.com/in/your-profile",
                    "https://twitter.com/your-handle"
                ],
                "jobTitle": "Full-Stack Developer & Data Scientist",
                "worksFor": {
                    "@type": "Organization",
                    "name": "Freelance"
                },
                "alumniOf": {
                    "@type": "Organization",
                    "name": "Your University"
                },
                "knowsAbout": [
                    "React",
                    "Node.js",
                    "Python",
                    "Machine Learning",
                    "Data Science",
                    "Full-Stack Development",
                    "Artificial Intelligence"
                ],
                "award": "Top 115 GitHub Users in Tunisia"
            },
            {
                "@type": "WebSite",
                "name": "Ghabbara Hanene Portfolio",
                "url": "https://your-domain.com",
                "description": "Portfolio showcasing projects, experience, and achievements of Ghabbara Hanene - Full-Stack Developer & Data Scientist",
                "author": {
                    "@type": "Person",
                    "name": "Ghabbara Hanene"
                },
                "inLanguage": "en-US"
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": "https://your-domain.com"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "About",
                        "item": "https://your-domain.com#about"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "Projects",
                        "item": "https://your-domain.com#projects"
                    },
                    {
                        "@type": "ListItem",
                        "position": 4,
                        "name": "Contact",
                        "item": "https://your-domain.com#contact"
                    }
                ]
            }
        ]
    };

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(structuredData)}
            </script>
        </Helmet>
    );
};

export default SEOHead;
