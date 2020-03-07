exports.run=(client,message,args)=>{
	client.request(options,function(error,response,body){
		if(!response){
			message.channel.send('Error getting the resource.');
			return;
		}
		if(body.length>2000){
			message.channel.send('Response too long to send.');
			return;	
		}
		message.channel.send(body);
	});
}
