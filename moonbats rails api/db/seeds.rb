require 'csv'

csv_text = File.read(Rails.root.join('lib', 'seeds', 'natsgames12-16.csv'))
csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
csv.each do |row|
  t = Natsgame.new
  t.date = row['date']
  t.team = row['team']
  t.opponent = row['opponent']
  t.win = row['win']
  t.runs = row['runs']
  t.runs_allowed = row['runs_allowed']
  t.save
end

csv_text = File.read(Rails.root.join('lib', 'seeds', 'moonphases12-16.csv'))
csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
csv.each do |row|
  t = Moonphase.new
  t.date = row['date']
  t.phase = row['phase']
  t.save
end


#
# puts "There are now #{Natsgame.count} rows in the natsgames table"
