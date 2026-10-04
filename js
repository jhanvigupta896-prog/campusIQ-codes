const form = document.getElementById("issueForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const title = document.getElementById("title").value;
    const location = document.getElementById("location").value;
    const description = document.getElementById("description").value;

    console.log("Title:", title);
    console.log("Location:", location);
    console.log("Description:", description);

    document.getElementById("result").innerText =
        "Issue submitted successfully!";

});
