function generate(){
    var facts = {
        "- Sir Vicente" : '"Mga Monggoloid"',
        "- George Ambing" : '"Cabigbang"',

    }

    var authors = Object.keys(facts);

    var author = authors[Math.floor(Math.random() *
        authors.length)]

    var fact = facts[author];

    document.getElementById("fact").innerHTML =
    fact;
    document.getElementById("author").innerHTML =
    author;

}