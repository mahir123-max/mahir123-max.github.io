{\rtf1\ansi\ansicpg1252\cocoartf2865
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // This script adds a simple "reveal on scroll" animation for the project cards.\
\
document.addEventListener('DOMContentLoaded', () => \{\
    const observer = new IntersectionObserver(entries => \{\
        entries.forEach((entry, index) => \{\
            if (entry.isIntersecting) \{\
                // Add a staggered delay for each card\
                setTimeout(() => \{\
                    entry.target.style.opacity = '1';\
                    entry.target.style.transform = 'translateY(0)';\
                    entry.target.style.transition = 'opacity 0.8s ease, transform 0.8s ease';\
                \}, index * 200); // 200ms delay between cards\
                observer.unobserve(entry.target);\
            \}\
        \});\
    \}, \{\
        threshold: 0.1 // Trigger when 10% of the element is visible\
    \});\
\
    // Observe the projects title\
    const projectsTitle = document.querySelector('.projects h2');\
    if(projectsTitle) \{\
        observer.observe(projectsTitle);\
    \}\
    \
    // Observe each project card\
    const projectCards = document.querySelectorAll('.project-card');\
    projectCards.forEach(card => \{\
        observer.observe(card);\
    \});\
\});}