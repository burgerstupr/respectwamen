module.exports=(client)=>{	
	console.log('Bot online!');
	client.user.setActivity(`${client.config.prefix}h | ${client.guilds.size} servers`);

	// Check if the table "points" exists.
  	const table = client.sql.prepare("SELECT count(*) FROM sqlite_master WHERE type='table' AND name = 'scores';").get();
	if (!table['count(*)']) {
		// If the table isn't there, create it and setup the database correctly.
		client.sql.prepare("CREATE TABLE scores (id TEXT PRIMARY KEY, user TEXT, server TEXT, dailyCollected TEXT, userInfo TEXT, colour INTEGER, money INTEGER, points INTEGER, level INTEGER);").run();
		// Ensure that the "id" row is always unique and indexed.
		client.sql.prepare("CREATE UNIQUE INDEX idx_scores_id ON scores (id);").run();
		client.sql.pragma("synchronous = 1");
		client.sql.pragma("journal_mode = wal");
	}


 	 // And then we have two prepared statements to get and set the score data.
  	client.getScore = client.sql.prepare("SELECT * FROM scores WHERE user = ?");
  	client.setScore = client.sql.prepare("INSERT OR REPLACE INTO scores (id, user, server, dailyCollected, userInfo, colour, money, points, level) VALUES (@id, @user, @server, @dailyCollected, @userInfo, @colour, @money, @points, @level);");
}
