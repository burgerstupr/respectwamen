module.exports = (client,message) => {

	if(message.author.bot){
		return;
	}

	const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();
	

	function ownerOnly(){
		message.channel.send(`Sorry, this command can only be used by ${config.owner}`);
	}

	let score = client.getScore.get(message.author.id);

	if (!score){
		if(!message.guild) return;
 	 score = {
   		id: `${message.guild.id}-${message.author.id}`,
    	user: message.author.id,
		server: message.guild.id,
		dailyCollected: 'No',
		userInfo: `Set your info with ${client.config.prefix}setinfo`,
		colour: 0xffffff,
		money: 30,
    	points: 0,
    	level: 1
 	 }
	}
	
	client.score=score; 
	
	score.points++;

	const levelup = Math.floor(0.1 * Math.sqrt(score.points));

	if(score.level < levelup) {
  		score.level++;
		client.setScore.run(score);
  		message.channel.send(message.author.username+' is now level **'+levelup+'**!');
	}

	if(message.content.indexOf(client.config.prefix) !==0) return;

  // Grab the command data from the client.commands Enmap
  const cmd = client.commands.get(command);

  // If that command doesn't exist, silently exit and do nothing
  if (!cmd) return;

  // Run the command
  cmd.run(client, message, args);
};
