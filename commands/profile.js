exports.run=(client,message,args)=>{
	let user = message.mentions.users.first() || client.users.get(args[0]);
	if(!user){
		message.channel.send({'embed':{
			title:`**${message.author.username}**`,
			thumbnail:{'url':message.author.avatarURL},
			color:client.score.colour,
			fields:[
				{name:'**Info**',value:client.score.userInfo},
				{name:'**Credits**',value:'$'+client.score.money},
				{name:'**XP**',value:client.score.points,inline:true},
				{name:'**Level**',value:client.score.level,inline:true}
			]
		}});
	}

	if(user){
		let userscore = client.getScore.get(user.id);
		if(user.bot){
			message.channel.send('Bots don\'t have profiles');
			return;
		}
		if(!userscore){
			message.channel.send('That user doesn\'t have a profile yet!');
			return;
		}
		else{
			message.channel.send({'embed':{
				title:`**${user.username}**`,
				thumbnail:{'url':user.avatarURL},
				color:userscore.colour,
				fields:[
					{name:'**Info**',value:userscore.userInfo,inline:true},
					{name:'**Credits**',value:'$'+userscore.money},
					{name:'**XP**',value:userscore.points,inline:true},
					{name:'**Level**',value:userscore.level,inline:true}
				]
			}});
		}
	}
}
