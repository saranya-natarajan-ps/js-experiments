function parseAndDisplayName(fullName){
    //identifying space position
    let spaceposition = fullName.indexOf(" ");
    let firstName = fullName.substring(0,spaceposition);
    let lastName = fullName.substring(spaceposition+1);

    console.log(`Name: ${fullName}\nFirst Name: ${firstName}\nLast Name: ${lastName}`)
}

parseAndDisplayName("Brenda Kaye")
parseAndDisplayName("Ian Auston");
parseAndDisplayName("Siddalee Grace");