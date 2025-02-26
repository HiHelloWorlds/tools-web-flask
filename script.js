const tools = [
    { name: "Canva", desc: "Create stunning designs.", url: "https://www.canva.com", img: "https://placehold.co/150x150" },
    { name: "Trello", desc: "Organize projects.", url: "https://trello.com", img: "https://placehold.co/150x150" },
    { name: "Google Docs", desc: "Collaborative docs.", url: "https://docs.google.com", img: "https://placehold.co/150x150" },
    { name: "Grammarly", desc: "Improve your writing.", url: "https://www.grammarly.com", img: "https://placehold.co/150x150" },
    { name: "Zoom", desc: "Video meetings.", url: "https://zoom.us", img: "https://placehold.co/150x150" },
    { name: "Slack", desc: "Team messaging.", url: "https://slack.com", img: "https://placehold.co/150x150" },
    { name: "GitHub", desc: "Code hosting.", url: "https://github.com", img: "https://placehold.co/150x150" },
    { name: "Figma", desc: "Design collaboration.", url: "https://www.figma.com", img: "https://placehold.co/150x150" },
    { name: "Notion", desc: "All-in-one workspace.", url: "https://www.notion.so", img: "https://placehold.co/150x150" },
    { name: "Airtable", desc: "Flexible spreadsheets.", url: "https://airtable.com", img: "https://placehold.co/150x150" },
    { name: "Zapier", desc: "Automate tasks.", url: "https://zapier.com", img: "https://placehold.co/150x150" },
    { name: "IFTTT", desc: "Connect services.", url: "https://ifttt.com", img: "https://placehold.co/150x150" },
    { name: "Hootsuite", desc: "Manage social media.", url: "https://hootsuite.com", img: "https://placehold.co/150x150" },
    { name: "Buffer", desc: "Schedule posts.", url: "https://buffer.com", img: "https://placehold.co/150x150" },
    { name: "Mailchimp", desc: "Email campaigns.", url: "https://mailchimp.com", img: "https://placehold.co/150x150" },
    { name: "Unsplash", desc: "Free photos.", url: "https://unsplash.com", img: "https://placehold.co/150x150" },
    { name: "Pexels", desc: "Stock media.", url: "https://www.pexels.com", img: "https://placehold.co/150x150" },
    { name: "TinyPNG", desc: "Optimize images.", url: "https://tinypng.com", img: "https://placehold.co/150x150" },
    { name: "Remove.bg", desc: "Remove backgrounds.", url: "https://www.remove.bg", img: "https://placehold.co/150x150" },
    { name: "Coolors", desc: "Color schemes.", url: "https://coolors.co", img: "https://placehold.co/150x150" },
    { name: "Fontjoy", desc: "Match fonts.", url: "https://fontjoy.com", img: "https://placehold.co/150x150" },
    { name: "Lorem Ipsum", desc: "Dummy text.", url: "https://loremipsum.io", img: "https://placehold.co/150x150" },
    { name: "JSON Placeholder", desc: "Test APIs.", url: "https://jsonplaceholder.typicode.com", img: "https://placehold.co/150x150" },
    { name: "CodePen", desc: "Code playground.", url: "https://codepen.io", img: "https://placehold.co/150x150" },
    { name: "JSFiddle", desc: "Edit code online.", url: "https://jsfiddle.net", img: "https://placehold.co/150x150" },
    { name: "Repl.it", desc: "Online coding.", url: "https://replit.com", img: "https://placehold.co/150x150" },
    { name: "Stack Overflow", desc: "Coding help.", url: "https://stackoverflow.com", img: "https://placehold.co/150x150" },
    { name: "MDN Web Docs", desc: "Web docs.", url: "https://developer.mozilla.org", img: "https://placehold.co/150x150" },
    { name: "W3Schools", desc: "Learn web dev.", url: "https://www.w3schools.com", img: "https://placehold.co/150x150" },
    { name: "Codecademy", desc: "Code lessons.", url: "https://www.codecademy.com", img: "https://placehold.co/150x150" },
    { name: "freeCodeCamp", desc: "Free coding.", url: "https://www.freecodecamp.org", img: "https://placehold.co/150x150" },
    { name: "Coursera", desc: "Online courses.", url: "https://www.coursera.org", img: "https://placehold.co/150x150" },
    { name: "edX", desc: "Learn online.", url: "https://www.edx.org", img: "https://placehold.co/150x150" },
    { name: "Khan Academy", desc: "Free education.", url: "https://www.khanacademy.org", img: "https://placehold.co/150x150" },
    { name: "Duolingo", desc: "Learn languages.", url: "https://www.duolingo.com", img: "https://placehold.co/150x150" },
    { name: "Quizlet", desc: "Study tools.", url: "https://quizlet.com", img: "https://placehold.co/150x150" },
    { name: "Wolfram Alpha", desc: "Solve problems.", url: "https://www.wolframalpha.com", img: "https://placehold.co/150x150" },
    { name: "Desmos", desc: "Graph calculator.", url: "https://www.desmos.com", img: "https://placehold.co/150x150" },
    { name: "GeoGebra", desc: "Math tools.", url: "https://www.geogebra.org", img: "https://placehold.co/150x150" },
    { name: "Overleaf", desc: "LaTeX editor.", url: "https://www.overleaf.com", img: "https://placehold.co/150x150" },
    { name: "Lucidchart", desc: "Flowcharts.", url: "https://www.lucidchart.com", img: "https://placehold.co/150x150" },
    { name: "Draw.io", desc: "Diagram tool.", url: "https://app.diagrams.net", img: "https://placehold.co/150x150" },
    { name: "Miro", desc: "Team whiteboard.", url: "https://miro.com", img: "https://placehold.co/150x150" },
    { name: "Calendly", desc: "Book meetings.", url: "https://calendly.com", img: "https://placehold.co/150x150" },
    { name: "Doodle", desc: "Group polls.", url: "https://doodle.com", img: "https://placehold.co/150x150" },
    { name: "LastPass", desc: "Password vault.", url: "https://www.lastpass.com", img: "https://placehold.co/150x150" },
    { name: "1Password", desc: "Secure passwords.", url: "https://1password.com", img: "https://placehold.co/150x150" },
    { name: "Bitwarden", desc: "Free password mgr.", url: "https://bitwarden.com", img: "https://placehold.co/150x150" },
    { name: "ProtonMail", desc: "Encrypted email.", url: "https://proton.me", img: "https://placehold.co/150x150" },
    { name: "Signal", desc: "Private chat.", url: "https://signal.org", img: "https://placehold.co/150x150" },
    { name: "Telegram", desc: "Fast messaging.", url: "https://telegram.org", img: "https://placehold.co/150x150" },
    { name: "WhatsApp", desc: "Chat & calls.", url: "https://www.whatsapp.com", img: "https://placehold.co/150x150" },
    { name: "Discord", desc: "Community chat.", url: "https://discord.com", img: "https://placehold.co/150x150" },
    { name: "Skype", desc: "Video calls.", url: "https://www.skype.com", img: "https://placehold.co/150x150" },
    { name: "Evernote", desc: "Note-taking.", url: "https://evernote.com", img: "https://placehold.co/150x150" },
    { name: "Todoist", desc: "Task manager.", url: "https://todoist.com", img: "https://placehold.co/150x150" }
];

const toolsDiv = document.getElementById('tools');
tools.forEach(tool => {
    toolsDiv.innerHTML += `
        <div class="col-6 col-md-4 col-lg-3">
            <div class="card">
                <img src="${tool.img}" class="card-img-top" alt="${tool.name}">
                <div class="card-body">
                    <h5 class="card-title">${tool.name}</h5>
                    <p class="card-text">${tool.desc}</p>
                    <a href="${tool.url}" class="btn btn-primary" target="_blank">Visit</a>
                </div>
            </div>
        </div>
    `;
});
