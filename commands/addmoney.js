exports.run=(client,message,args)=>{
	if(!client.admins[message.author.id]){
		message.channel.send('Sorry, this command can only be used by the bot admins');
		return;
	}
	var amount=args.join(' ');
	let user = message.mentions.users.first() || client.users.get(args[0]);
	if(!user){
		client.score.money=amount;
		client.setScore.run(client.score);
		message.channel.send(`Gave ${amount}`);
	}
	if(user){
		let userscore = client.getScore.get(user.id);
		client.userscore.money=amount;
		client.setScore.run(client.userscore);
	}
}
