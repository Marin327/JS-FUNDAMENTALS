function messagesManager(input) {
    const capacity = input.shift();
    let command = input.shift();
    let userList = [];

    while (command !== "Statistics") {
        const arrayCommands = command.split('=');
        const length = arrayCommands.length;

        if (length === 2) {
            const [operation, targetUsername] = arrayCommands;

            if (operation === "Empty") {
                if (targetUsername === "All") {
                    userList = [];
                } else {
                    const targetUser = userList.find((u) => u.username === targetUsername);

                    if (targetUser) {
                        // targetUser.sent = 0;
                        // targetUser.received = 0;
                        userList = userList.filter((u) => u !== targetUser);
                    }
                }
            }
        } else if (length === 3) {
            let [operation, sender, receiver] = arrayCommands;

            if (operation === "Message") {
                const senderTarget = userList.find((u) => u.username === sender);
                const receiverTarget = userList.find((u) => u.username === receiver);

                if (senderTarget && receiverTarget) {
                    if ((senderTarget.sent + 1) + senderTarget.received >= capacity) {
                        console.log(`${sender} reached the capacity!`);
                        userList = userList.filter((u) => u !== senderTarget);
                    } else {
                        senderTarget.sent++;
                    }

                    if ((receiverTarget.received + 1) + receiverTarget.received >= capacity) {
                        console.log(`${receiver} reached the capacity!`);
                        userList = userList.filter((u) => u !== receiverTarget);
                    } else {
                        receiverTarget.received++;
                    }
                }
            }
        } else if (length === 4) {
            let [operation, username, sent, received] = arrayCommands;
            sent = Number(sent);
            received = Number(received);

            if (operation === "Add") {
                if (!userList.some((u) => u.username === username)) {
                    userList.push({
                        username,
                        sent,
                        received,
                    });
                }
            }
        }

        command = input.shift();
    }

    userList
        .sort((a, b) => {
            // if (b.received - a.received === 0) {
            //     return a.username.localeCompare(b.username);
            // } else {
            //   return  b.received - a.received;
            // }

            return b.received - a.received || a.username.localeCompare(b.username);
        });

    console.log(`Users count: ${userList.length}`);
    for (const user of userList) {
        console.log(`${user.username} - ${user.received + user.sent}`);
    }
}