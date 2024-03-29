/* feedreader.js
 * TP-Feedreader-Testing
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

         it("each feed url is defined and not empty", function() {
            allFeeds.forEach(Feed => {
                expect(Feed.url).toBeDefined();
                expect(Feed.url.length).not.toBe(0);
            });
         });

        /* Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

         it("each feed name is defined and not empty", function() {
            allFeeds.forEach(Feed => {
                expect(Feed.name).toBeDefined();
                expect(Feed.name.length).not.toBe(0);
            });
         });
         /* Used the forEach to go through the feed */
    });


    /* Write a new test suite named "The menu" */

    describe("The menu", function() {

        /* Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

         it("is hidden by default", function() {
            const checkForClass = $("body").hasClass("menu-hidden");
            expect(checkForClass).toBe(true);
         });

         /* Created a var to check for class that shows menu is hidden*/

          /*Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */

          it("displays when clicked and hides when clicked", function() {
            //Opening click
            $(".menu-icon-link").click();         
            expect($("body").hasClass("menu-hidden")).toBe(false);

            //Closing click
            $(".menu-icon-link").click();
            expect($("body").hasClass("menu-hidden")).toBe(true);
         });
          /* I used an event spy on the menu-icon-link click */

    });

        

    /* Write a new test suite named "Initial Entries" */

    describe("Initial Entries", function() {

        /* Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

         beforeEach(function(done){
            loadFeed(0, done);
         });

         it("are present when loadFeed is called", function() {
            const checkEntry = $(".feed .entry").length;
            expect(checkEntry).toBeGreaterThan(0);
         });


    });
        

    /* Write a new test suite named "New Feed Selection" */

    describe("New Feed Selection", function() {

        /* Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

         //Declared var for initial and new feeds

         let initialFeed;
         let newFeed;

         // Load each initial feed
         beforeEach(function(done) {
            loadFeed(0, function() {
                initialFeed = $(".feed").html();
                done();
            });
         });

         //Compare initial and new feeds
         it("content changes when new feed loaded", function(done) {
            loadFeed(2, function() {
                newFeed = $(".feed").html();
                expect(newFeed).not.toBe(initialFeed);
                done();
            });

         });

    });
        
}());
