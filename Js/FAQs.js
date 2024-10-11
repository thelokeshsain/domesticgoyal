document.querySelectorAll('[id$="-button"]').forEach(button => {
    button.addEventListener('click', () => {
        const content = document.getElementById(button.id.replace('-button', '-content'));
        const icon = document.getElementById(button.id.replace('-button', '-icon'));
        const allContents = document.querySelectorAll('[id$="-content"]');
        const allIcons = document.querySelectorAll('[id$="-icon"]');

        // Close all other FAQs
        allContents.forEach(c => {
            if (c !== content) {
                c.classList.add('max-h-0');
                c.classList.remove('max-h-screen');
            }
        });

        allIcons.forEach(i => {
            if (i !== icon) {
                i.classList.remove('rotate-180');
            }
        });

        // Toggle the current FAQ
        if (content.classList.contains('max-h-0')) {
            content.classList.remove('max-h-0');
            content.classList.add('max-h-screen');
            icon.classList.add('rotate-180');
        } else {
            content.classList.remove('max-h-screen');
            content.classList.add('max-h-0');
            icon.classList.remove('rotate-180');
        }
    });
});
