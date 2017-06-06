require 'csv'

nationals = Team.create!({
  name:'Washington Nationals',
  symbol:'WSN',
  logo:'http://www.stickpng.com/assets/images/584d42180a44bd1070d5d418.png'
})

phillies = Team.create!({
  name:"Philadelphia Phillies",
  symbol:"PHI",
  logo:'http://2080baseball.com/wp-content/uploads/2015/11/LogoMLBPHI.png'
})

braves = Team.create!({
  name:"Atlanta Braves",
  symbol:'ATL',
  logo:'http://www.stickpng.com/assets/images/584d43fb0a44bd1070d5d435.png'
})

mets = Team.create!({
  name:'New York Mets',
  symbol:'NYM',
  logo:'http://www.stickpng.com/assets/images/584d43140a44bd1070d5d427.png'
})

marlins = Team.create!({
  name:'Miami Marlins',
  symbol:'MIA',
  logo:'http://www.stickpng.com/assets/images/584d439b0a44bd1070d5d42e.png'
})

csv_text = File.read(Rails.root.join('lib', 'seeds', 'NatsCurrentGames.csv'))
csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
csv.each do |row|
  t = Currentgame.new
  t.date = DateTime.strptime(row['date'], '%A %b %d')
  t.team = Team.find(symbol: row['team'])
  t.opp = row['opp']
  t.wl = row['wl']
  t.runs = row['runs']
  t.runs_allowed = row['runs_allowed']
  t.save
end







# csv_text = File.read(Rails.root.join('lib', 'seeds', 'moonphases12-16.csv'))
# csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
# csv.each do |row|
#   t = Moonphase.new
#   t.date = row['date']
#   t.phase = row['phase']
#   t.save
# end
#
#
