// Member data
const members = [
    {
        name: "Aaron Rayford",
        image: "images/aaron-rayford.jpg", // Replace with actual image path
        link: "members/aaron-rayford.html"  // Replace with actual link to individual page
    },
    {
        name: "Stephon Cowans",
        image: "images/stephon-cowans.jpg", // Replace with actual image path
        link: "members/stephon-cowans.html"  // Replace with actual link to individual page
    },
    {
        name: "Justin Bakeman",
        image: "images/justin-bakeman.jpg", // Replace with actual image path
        link: "members/justin-bakeman.html"  // Replace with actual link to individual page
    },
    {
        name: "Akel White",
        image: "images/akel-white.jpg", // Replace with actual image path
        link: "members/akel-white.html"  // Replace with actual link to individual page
    },
    {
        name: "Treon Davis",
        image: "images/treon-davis.jpg", // Replace with actual image path
        link: "members/treon-davis.html"  // Replace with actual link to individual page
    },
    {
        name: "Taeyon Reese",
        image: "images/taeyon-reese.jpg", // Replace with actual image path
        link: "members/taeyon-reese.html"  // Replace with actual link to individual page
    },
    {
        name: "Brayden Morgan",
        image: "images/brayden-morgan.jpg", // Replace with actual image path
        link: "members/brayden-morgan.html"  // Replace with actual link to individual page
    },
    {
        name: "Braylin Shaw",
        image: "images/braylin-shaw.jpg", // Replace with actual image path
        link: "members/braylin-shaw.html"  // Replace with actual link to individual page
    },
    {
        name: "Cedric Thompson",
        image: "images/cedric-thompson.jpg", // Replace with actual image path
        link: "members/cedric-thompson.html"  // Replace with actual link to individual page
    },
    {
        name: "David Harrison",
        image: "images/david-harrison.jpg", // Replace with actual image path
        link: "members/david-harrison.html"  // Replace with actual link to individual page
    },
    {
        name: "John Sykes",
        image: "images/john-sykes.jpg", // Replace with actual image path
        link: "members/john-sykes.html"  // Replace with actual link to individual page
    },
    {
        name: "Robert Powe",
        image: "images/robert-powe.jpg", // Replace with actual image path
        link: "members/robert-powe.html"  // Replace with actual link to individual page
    },
    {
        name: "Richman Smith",
        image: "images/richman-smith.jpg", // Replace with actual image path
        link: "members/richman-smith.html"  // Replace with actual link to individual page
    },
    {
        name: "Ian Robinson",
        image: "images/ian-robinson.jpg", // Replace with actual image path
        link: "members/ian-robinson.html"  // Replace with actual link to individual page
    },
    {
        name: "Tyrell Moore",
        image: "images/tyrell-moore.jpg", // Replace with actual image path
        link: "members/tyrell-moore.html"  // Replace with actual link to individual page
    },
    {
        name: "Willie Parker",
        image: "images/willie-parker.jpg", // Replace with actual image path
        link: "members/willie-parker.html"  // Replace with actual link to individual page
    },
    {
        name: "Erick Featherstone",
        image: "images/erick-featherstone.jpg", // Replace with actual image path
        link: "members/erick-featherstone.html"  // Replace with actual link to individual page
    },
    {
        name: "Erik Holloway",
        image: "images/erik-holloway.jpg", // Replace with actual image path
        link: "members/erik-holloway.html"  // Replace with actual link to individual page
    },
    {
        name: "Bryson Evans",
        image: "images/bryson-evans.jpg", // Replace with actual image path
        link: "members/bryson-evans.html"  // Replace with actual link to individual page
    },
    {
        name: "Andrew Callahan",
        image: "images/andrew-callahan.jpg", // Replace with actual image path
        link: "members/andrew-callahan.html"  // Replace with actual link to individual page
    },
    {
        name: "Anthony Mitchel",
        image: "images/anthony-mitchel.jpg", // Replace with actual image path
        link: "members/anthony-mitchel.html"  // Replace with actual link to individual page
    },
    {
        name: "Alijah Williams",
        image: "images/alijah-williams.jpg", // Replace with actual image path
        link: "members/alijah-williams.html"  // Replace with actual link to individual page
    },
    {
        name: "Ethan Simmons",
        image: "images/ethan-simmons.jpg", // Replace with actual image path
        link: "members/ethan-simmons.html"  // Replace with actual link to individual page
    },
    {
        name: "Tarik Eddins",
        image: "images/tarik-eddins.jpg", // Replace with actual image path
        link: "members/tarik-eddins.html"  // Replace with actual link to individual page
    }
];

// Spotlight Section Logic
let currentMemberIndex = 0;

// Display first member's info
const displayMember = () => {
    const member = members[currentMemberIndex];
    const spotlightName = document.getElementById('spotlight-name');
    const memberImage = document.getElementById('member-image');
    const memberLink = document.getElementById('member-link');
    
    spotlightName.textContent = member.name;
    memberImage.src = member.image;
    memberImage.alt = `Image of ${member.name}`;
    memberLink.href = member.link;
    memberLink.textContent = `Learn more about ${member.name}`;
};

// Handle Next Member button click
const nextMemberButton = document.getElementById('next-member');
nextMemberButton.addEventListener('click', () => {
    currentMemberIndex = (currentMemberIndex + 1) % members.length;
    displayMember();
});

// Initial display
displayMember();
