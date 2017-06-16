require 'csv'

Team.destroy_all
Game.destroy_all
Moonphase.destroy_all


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
  logo: 'http://www.stickpng.com/assets/images/584d439b0a44bd1070d5d42e.png'
})

csv_text = File.read(Rails.root.join('lib', 'seeds', 'games2017.csv'))
csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
csv.each do |row|
  t = Game.new
  t.date = DateTime.strptime(row['date'], '%A %b %d')
  t.team = Team.find_by(symbol: row['team'])
  t.opp = row['opp']
  t.wl = row['wl']
  t.save
end

csv_text = File.read(Rails.root.join('lib', 'seeds', 'games2016.csv'))
csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
csv.each do |row|
  t = Game.new
  t.date = DateTime.strptime(row['date'], '%A %b %d').change(year:2016)
  t.team = Team.find_by(symbol: row['team'])
  t.opp = row['opp']
  t.wl = row['wl']
  t.save
end

csv_text = File.read(Rails.root.join('lib', 'seeds', 'games2015.csv'))
csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
csv.each do |row|
  t = Game.new
  t.date = DateTime.strptime(row['date'], '%A %b %d').change(year:2015)
  t.team = Team.find_by(symbol: row['team'])
  t.opp = row['opp']
  t.wl = row['wl']
  t.save
end

csv_text = File.read(Rails.root.join('lib', 'seeds', 'games2014.csv'))
csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
csv.each do |row|
  t = Game.new
  t.date = DateTime.strptime(row['date'], '%A %b %d').change(year:2014)
  t.team = Team.find_by(symbol: row['team'])
  t.opp = row['opp']
  t.wl = row['wl']
  t.save
end

csv_text = File.read(Rails.root.join('lib', 'seeds', 'games2013.csv'))
csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
csv.each do |row|
  t = Game.new
  t.date = DateTime.strptime(row['date'], '%A %b %d').change(year:2013)
  t.team = Team.find_by(symbol: row['team'])
  t.opp = row['opp']
  t.wl = row['wl']
  t.save
end

csv_text = File.read(Rails.root.join('lib', 'seeds', 'games2012.csv'))
csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
csv.each do |row|
  t = Game.new
  t.date = DateTime.strptime(row['date'], '%A %b %d').change(year:2012)
  t.team = Team.find_by(symbol: row['team'])
  t.opp = row['opp']
  t.wl = row['wl']
  t.save
end

csv_text = File.read(Rails.root.join('lib', 'seeds', 'moonphases.csv'))
csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
csv.each do |row|
  t = Moonphase.new
  t.date = DateTime.strptime(row['date'], '%m/%d/%Y')
  t.phase = row['phase']
  t.save
end
