exports.run=(client,message,args)=>{
	if(args==0){
		client.score.userInfo=`Set your info with ${client.config.prefix}setinfo`;
		client.setScore.run(client.score);
		message.channel.send('**Reset your info!**');
		return;
	}
	if(args.join(' ').length>900){
		message.channel.send('Info cannot be more than 900 characters.');
		return;
		}
		client.score.userInfo=args.join(' ');
		client.setScore.run(client.score);
		message.channel.send('**Updated your info!**');
}
