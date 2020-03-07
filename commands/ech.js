exports.run=(client,message,args)=>{
	var ech=args.join(' ECH ');
	if(ech.length>2000) return;
	if(ech.length==0){
		message.channel.send('ECH');
		return;
	}
	else{
	message.channel.send(ech);
	}
}
