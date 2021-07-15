exports.runcmd = (fivemexports, client, message, params) => {
    let embed = {
        "title": "Status",
        "description": `\nPlayers: ${GetNumPlayerIndices()}\n\nBot Developed by the vRPDevTeam(JamesUK)\n\nThank you for using and playing this server!\n\nThe IP is: connect ${client.ip}`,
        "color": 5301186,
        "footer": {
            "text": "EGC Roleplay • Made by JoKeR#4571"
        },
        "timestamp": new Date()
    }
    message.channel.send({ embed })
}

exports.conf = {
    name: "status",
    perm: 0
}