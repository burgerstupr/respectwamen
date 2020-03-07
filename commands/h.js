exports.run=(client,message,args)=>{
	if(args==0){
		message.channel.send({'embed':{
			title:`${client.user.username} - All commands`,
			description:`Do ${client.config.prefix}h *[command]* for a description of that command.`,
			color:0xDC60FF,
			fields:[
				{name:'All',value:client.commands}
			],
			footer:{
				text:`Created by ${client.config.creator}`
			}
		}});
	}
	if(args!=0&&client.commands[args.join(' ').toLowerCase()]==undefined){
		message.channel.send('That is not a command!');
		return;
	}
	else if(args!=0){
		message.channel.send(`${args} - ${client.commands[args.join(' ').toLowerCase()]}`);
	}
}
