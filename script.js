const headerUrl = 'header.html';
const footerUrl = 'footer.html';

async function loadContent(url, targetId) {
    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const content = await response.text();
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            targetElement.innerHTML = content;
        }

    } catch (error) {
        console.error(`Could not load ${url}:`, error);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.innerHTML = `<p style="color: red;">Error loading page components.</p>`;
        }
    }
}

loadContent(headerUrl, 'header');
loadContent(footerUrl, 'footer');
