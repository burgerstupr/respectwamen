exports.run=(client,message,args)=>{
	if(/0x([A-Fa-f0-9]{6})$/.test(args)===true){
		client.score.colour=parseInt(args.join(' '));
		client.setScore.run(client.score);
		message.channel.send('**Updated your profile colour!**');
	}
	else{
		message.channel.send('Must be a valid hexadecimal colour value!');
	}
}
