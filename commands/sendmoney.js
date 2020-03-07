exports.run=(client,message,args,score)=>{
	let user = message.mentions.users.first() || client.users.get(args[0]);
	let moneyamount=parseInt(args[1]);
	if(!user){
		message.channel.send('You need to mention someone to send money to!');
		return;
	}

	let userscore = client.getScore.get(user.id);

	if(user.bot){
		message.channel.send('Bots don\'t have profiles!');
		return;
	}

	if(user.id===message.author.id){
		message.channel.send('You cannot send money to yourself!');
		return;
	}

	if(args[1]==null||isNaN(args[1])||args[1].includes('-')){
		message.channel.send('You need to specifiy a valid amount of money to send');
		return;
	}

	if(moneyamount > score.money||score.money===0){
		message.channel.send('You don\'t have that much money!');
		return;
	}

	if(!userscore){
		message.channel.send('That user doesn\'t have a profile yet!');
		return;
	}

	else{
		score.money -= moneyamount;
		userscore.money += moneyamount;
		client.setScore.run(score);
		client.setScore.run(userscore);
		message.channel.send('**Successfully sent $'+moneyamount+' to '+user.username+'**');
	}
}
