require 'csv'

csv_text = File.read(Rails.root.join('lib', 'seeds', 'Was2016.csv'))
csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
csv.each do |row|
  t = Was2016game.new
  t.gamenumber = row['gamenumber']
  t.date = row['date']
  t.team = row['team']
  t.opp = row['opp']
  t.wl = row['wl']
  t.runs = row['runs']
  t.runsallowed = row['runsallowed']
  t.win = row['win']
  t.loss = row['loss']
  t.pitch = row['pitch']
  t.attendance = row['attendance']
  t.save
end

puts "There are now #{Was2016game.count} rows in the transactions table"
