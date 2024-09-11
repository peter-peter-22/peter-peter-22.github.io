function vector(x, y) {
    this.x = x;
    this.y = y;
}

document.addEventListener("DOMContentLoaded", function () {
    generate();
    control();
});

//create the pages and set their data
let project;
let pageDoms;
function generate() {
    const generator = document.querySelector("#generate_pages");
    const example = generator.querySelector(".page");

    //get the name of the selected project from the url
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const project_name = urlParams.get('project')

    //find the json of this project
     project = projects[project_name];

    //display the name of the project
    const project_title = document.querySelector(".starting .rounded_box");
    project_title.textContent = project ? project.name : "invalid project name";
    if (!project)
        throw("invalid project name");

    //clone the example page
    const pages = project.pages;
    for (n = 0; n < pages.length - 1; n++) {
        const clone = example.cloneNode(true);
        example.after(clone);
    }

    //apply style and data to the pages
     pageDoms = generator.querySelectorAll(".page");
    for (n = 0; n < pageDoms.length; n++) {
        const page = pageDoms[n];
        style_page(page, n);
        apply_data(page, n, pages);
    }
}

//change pages based on inputs
function control() {
    const { next, prev } = render();
    const area = document.querySelector("#swipe_area");
    let start = null;

    area.addEventListener('mousedown', e => {
        start = new vector(e.x, e.y);
    })

    area.addEventListener('touchstart', e => {
        const v = process_touch(e);
        if (!v) return;
        start = v;;
    })

    area.addEventListener('touchmove', e => {
        const v = process_touch(e);
        if (!v) return;
        process_move(v);
    })

    area.addEventListener('mousemove', e => {
        if (e.buttons !== 1)
            return;
        process_move(new vector(e.x, e.y));
    })

    function process_move(current) {
        window.requestAnimationFrame(() => {
            if (!start)
                return;

            const distX = current.x - start.x;

            const limit = 150;
            if (Math.abs(distX) > limit) {
                start = null;
                if (distX < 0)
                    next()
                else
                    prev();
            }
        });
    }

    function process_touch(e) {
        const touches = e.changedTouches;
        if (touches.length === 0)
            return null;
        const my_touch = touches[0];
        return new vector(my_touch.pageX, my_touch.pageY);
    }
}

//animate the pages pased on the page count
function render() {
    let page = 0;

    function set_page(offset) {
        //offset and clamp
        page += offset;

        //when swiping right at the first page, exit
        if (page < 0)
            window.location = "/";

        //when swiping left at the last page, open the url
        if (page > pageDoms.length)
            window.location = project.url;

        for (n = 0; n < pageDoms.length; n++)
            pageDoms[n].setAttribute("data-active", page > n);
    }

    function next() {
        set_page(1);
    }

    function prev() {
        set_page(-1);
    }

    return { next, prev };
}

function page(title, text, image) {
    this.title = title;
    this.text = text;
    this.image = image;
}

const projects = {
    shop: {
        name: "Sample Shop",
        url:"https://google.com",
        pages: [
            new page(
                "Starting page",
                "The first page the user ecounters introduces the shop, shows a few products and lists the top discounts.",
                "projects/shop/top_discounts.jpg"
            ),
            new page(
                "Browsing",
                "In the browsing menu the displayed products can be filtered by category, properties and discounts.",
                "projects/shop/filters.jpg"
            ),
            new page(
                "Authentication",
                "The user can be authenticated with an email address or google auth. The session ends when the browser is closed unless the \"remember me\" option is checked. Sessions persist between server restarts.",
                "projects/shop/login.jpg"
            ),
            new page(
                "Reviews",
                "The users can rate a product and tell their opinions about it, or reply to a rating. The average rating is displayed at each product.",
                "projects/shop/reviews.jpg"
            ),
            new page(
                "Checkout",
                "The page uses stripe to handle the payments. The users are automatically registered to stripe and they can view their receipts in the user menu.",
                "projects/shop/checkout.jpg"
            ),
            new page(
                "Editor UI",
                "The categories, filters, products and discounts can be edited on the page without coding.",
                "projects/shop/admin.jpg"
            )
        ]
    }
};

//set seemingly random color and transform on a page
function style_page(page, number) {
    const rotation = page_rotations[repeat(number, page_rotations.length)];
    const color = page_colors[repeat(number, page_colors.length)];

    page.style.backgroundColor = `var(${color})`;
    page.style.transform = `rotate(${rotation}deg)`
}

function apply_data(page, number, project) {
    const my_data = project[number];
    if (!my_data)
        return;
    page.querySelector(".title").textContent = my_data.title;
    page.querySelector(".text").textContent = my_data.text;
    page.querySelector("img").src = my_data.image;
}

function repeat(val, length) {
    while (val >= length)
        val -= length;
    return val;
}

const page_rotations = [
    2,
    -2,
    1,
    -1,
    0,
    -3,
    3
];

const page_colors = [
    "--html",
    "--javascript",
    "--css",
    "--nodejs",
    "--git",
    "--postgresql",
];