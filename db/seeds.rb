# #~ needs more elaborate seeding, this is just beginner level

puts '---- deleting the old data first'
Bar.delete_all
User.delete_all
Cocktail.delete_all
BarCocktail.delete_all
Review.delete_all

puts '---- Now for the re-seeding...'

puts '----- seeding 5 drinks'
old_fashioned = Cocktail.create(name: 'Old Fashioned',
                                ingredients: ['Bourbon', 'Whiskey', 'bitters', 'orange twist', 'sugar'], image: 'https://i.imgur.com/okx7oIZl.jpg')
cosmopolitan = Cocktail.create(name: 'Cosmopolitan',
                               ingredients: ['Vodka', 'Cointreau', 'cranberry juice', 'fresh lime juice', 'lemon twist'], image: 'https://i.imgur.com/P3kdUoSl.jpg')
mojito = Cocktail.create(name: 'Mojito', ingredients: ['White Rum', 'fresh mint', 'sugar', 'lime', 'soda water'],
                         image: 'https://i.imgur.com/px2Yg5Ul.jpg')
caipirinha = Cocktail.create(name: 'Caipirinha', ingredients: %w[Rum Cachaca lime sugar], image: 'https://i.imgur.com/V1oRIyLl.jpg')
long_island_ice_tea = Cocktail.create(name: 'Long Island Ice Tea',
                                      ingredients: ['Vodka', 'Gin', 'Rum', 'Tequila', 'Triple Sec', 'cola', 'syrup', 'lemon juice'], image: 'https://i.imgur.com/Y7pHgbhl.jpg')

puts '--- BROOKLYN BARS ----'
puts '----- seeding 5 brooklyn bars'
ore_bar = Bar.create!(name: 'Ore Bar', address: '277 Graham Ave, Brooklyn, NY 11211')
basik_bar = Bar.create!(name: 'Basik', address: '323 Graham Ave, Brooklyn, NY 11211')
blinkys_bar = Bar.create!(name: 'Blinkys', address: '609 Grand St, Brooklyn, NY 11211')
clover_bar = Bar.create!(name: 'Clover Bar', address: '210 Smith St, Brooklyn, NY 11201')
sunken_harbor_club_bar = Bar.create!(name: 'Sunken Harbor Club', address: '372 Fulton St, Brooklyn, NY 11201')

puts '----- seeding 5 cocktails per Brooklyn bar'

ore_bar_old_fashioned = BarCocktail.create(bar_id: ore_bar.id, cocktail_id: old_fashioned.id)
ore_bar_cosmopolitan = BarCocktail.create(bar_id: ore_bar.id, cocktail_id: cosmopolitan.id)
ore_bar_mojito = BarCocktail.create(bar_id: ore_bar.id, cocktail_id: mojito.id)
ore_bar_caipirinha = BarCocktail.create(bar_id: ore_bar.id, cocktail_id: caipirinha.id)
ore_bar_long_island_ice_tea = BarCocktail.create(bar_id: ore_bar.id, cocktail_id: long_island_ice_tea.id)

basik_bar_old_fashioned = BarCocktail.create(bar_id: basik_bar.id, cocktail_id: old_fashioned.id)
basik_bar_cosmopolitan = BarCocktail.create(bar_id: basik_bar.id, cocktail_id: cosmopolitan.id)
basik_bar_mojito = BarCocktail.create(bar_id: basik_bar.id, cocktail_id: mojito.id)
basik_bar_caipirinha = BarCocktail.create(bar_id: basik_bar.id, cocktail_id: caipirinha.id)
basik_bar_long_island_ice_tea = BarCocktail.create(bar_id: basik_bar.id, cocktail_id: long_island_ice_tea.id)

blinkys_bar_old_fashioned = BarCocktail.create(bar_id: blinkys_bar.id, cocktail_id: old_fashioned.id)
blinkys_bar_cosmopolitan = BarCocktail.create(bar_id: blinkys_bar.id, cocktail_id: cosmopolitan.id)
blinkys_bar_mojito = BarCocktail.create(bar_id: blinkys_bar.id, cocktail_id: mojito.id)
blinkys_bar_caipirinha = BarCocktail.create(bar_id: blinkys_bar.id, cocktail_id: caipirinha.id)
blinkys_bar_long_island_ice_tea = BarCocktail.create(bar_id: blinkys_bar.id, cocktail_id: long_island_ice_tea.id)

clover_bar_old_fashioned = BarCocktail.create(bar_id: clover_bar.id, cocktail_id: old_fashioned.id)
clover_bar_cosmopolitan = BarCocktail.create(bar_id: clover_bar.id, cocktail_id: cosmopolitan.id)
clover_bar_mojito = BarCocktail.create(bar_id: clover_bar.id, cocktail_id: mojito.id)
clover_bar_caipirinha = BarCocktail.create(bar_id: clover_bar.id, cocktail_id: caipirinha.id)
clover_bar_long_island_ice_tea = BarCocktail.create(bar_id: clover_bar.id, cocktail_id: long_island_ice_tea.id)

sunken_harbor_club_bar_old_fashioned = BarCocktail.create(bar_id: sunken_harbor_club_bar.id,
                                                          cocktail_id: old_fashioned.id)
sunken_harbor_club_bar_cosmopolitan = BarCocktail.create(bar_id: sunken_harbor_club_bar.id,
                                                         cocktail_id: cosmopolitan.id)
sunken_harbor_club_bar_mojito = BarCocktail.create(bar_id: sunken_harbor_club_bar.id, cocktail_id: mojito.id)
sunken_harbor_club_bar_caipirinha = BarCocktail.create(bar_id: sunken_harbor_club_bar.id, cocktail_id: caipirinha.id)
sunken_harbor_club_bar_long_island_ice_tea = BarCocktail.create(bar_id: sunken_harbor_club_bar.id,
                                                                cocktail_id: long_island_ice_tea.id)

puts '--- MANHATTAN BARS ----'
puts '----- seeding 5 Manhattan bars'
mace_bar = Bar.create!(name: 'Mace', address: '35 West 8th St, New York, NY 10011')
attaboy_bar = Bar.create!(name: 'Attaboy', address: '134 Eldridge St, New York, NY 10010')
belemans_bar = Bar.create!(name: 'Belemans Bar', address: '35 E 76th Street, New York, NY 10075')
sidneys_five_bar = Bar.create!(name: "Sidney's Five", address: '103 First Avenue, New York, NY 10003')
nrm_bar = Bar.create!(name: 'Nothing Really Matters', address: '1627 Broadway, New York, NY 10019')

puts '----- seeding 5 cocktails per Manhattan bar'
mace_bar_old_fashioned = BarCocktail.create(bar_id: mace_bar.id, cocktail_id: old_fashioned.id)
mace_bar_cosmopolitan = BarCocktail.create(bar_id: mace_bar.id, cocktail_id: cosmopolitan.id)
mace_bar_mojito = BarCocktail.create(bar_id: mace_bar.id, cocktail_id: mojito.id)
mace_bar_caipirinha = BarCocktail.create(bar_id: mace_bar.id, cocktail_id: caipirinha.id)
mace_bar_long_island_ice_tea = BarCocktail.create(bar_id: mace_bar.id, cocktail_id: long_island_ice_tea.id)

attaboy_bar_old_fashioned = BarCocktail.create(bar_id: attaboy_bar.id, cocktail_id: old_fashioned.id)
attaboy_bar_cosmopolitan = BarCocktail.create(bar_id: attaboy_bar.id, cocktail_id: cosmopolitan.id)
attaboy_bar_mojito = BarCocktail.create(bar_id: attaboy_bar.id, cocktail_id: mojito.id)
attaboy_bar_caipirinha = BarCocktail.create(bar_id: attaboy_bar.id, cocktail_id: caipirinha.id)
attaboy_bar_long_island_ice_tea = BarCocktail.create(bar_id: attaboy_bar.id, cocktail_id: long_island_ice_tea.id)

belemans_bar_old_fashioned = BarCocktail.create(bar_id: belemans_bar.id, cocktail_id: old_fashioned.id)
belemans_bar_cosmopolitan = BarCocktail.create(bar_id: belemans_bar.id, cocktail_id: cosmopolitan.id)
belemans_bar_mojito = BarCocktail.create(bar_id: belemans_bar.id, cocktail_id: mojito.id)
belemans_bar_caipirinha = BarCocktail.create(bar_id: belemans_bar.id, cocktail_id: caipirinha.id)
belemans_bar_long_island_ice_tea = BarCocktail.create(bar_id: belemans_bar.id, cocktail_id: long_island_ice_tea.id)

sidneys_five_bar_old_fashioned = BarCocktail.create(bar_id: sidneys_five_bar.id, cocktail_id: old_fashioned.id)
sidneys_five_bar_cosmopolitan = BarCocktail.create(bar_id: sidneys_five_bar.id, cocktail_id: cosmopolitan.id)
sidneys_five_bar_mojito = BarCocktail.create(bar_id: sidneys_five_bar.id, cocktail_id: mojito.id)
sidneys_five_bar_caipirinha = BarCocktail.create(bar_id: sidneys_five_bar.id, cocktail_id: caipirinha.id)
sidneys_five_bar_long_island_ice_tea = BarCocktail.create(bar_id: sidneys_five_bar.id,
                                                          cocktail_id: long_island_ice_tea.id)

nrm_bar_old_fashioned = BarCocktail.create(bar_id: nrm_bar.id, cocktail_id: old_fashioned.id)
nrm_bar_cosmopolitan = BarCocktail.create(bar_id: nrm_bar.id, cocktail_id: cosmopolitan.id)
nrm_bar_mojito = BarCocktail.create(bar_id: nrm_bar.id, cocktail_id: mojito.id)
nrm_bar_caipirinha = BarCocktail.create(bar_id: nrm_bar.id, cocktail_id: caipirinha.id)
nrm_bar_long_island_ice_tea = BarCocktail.create(bar_id: nrm_bar.id, cocktail_id: long_island_ice_tea.id)

puts '--- QUEENS BARS ----'
puts '----- seeding 5 queens bars'
sekend_sun = Bar.create!(name: 'Sekend Sun', address: '68-38 Forest Ave storefront B, Queens, NY 11385')
sundown_bar = Bar.create!(name: 'Sundown Bar', address: '32-11 Broadway, Queens, NY 11106')
the_bonnie_bar = Bar.create!(name: 'The Bonnie', address: '29-12 23rd Ave, Queens, NY 11105')
sweet_afton = Bar.create!(name: 'Sweet Afton', address: '30-09 34th St, Queens, NY 11103')
beer_garden = Bar.create!(name: 'Bohemian Hall and Beer Garden', address: '29-19 24th Ave, Queens, NY 11105')

puts '----- seeding 5 cocktails per Queens bar'
sekend_sun_old_fashioned = BarCocktail.create(bar_id: sekend_sun.id, cocktail_id: old_fashioned.id)
sekend_sun_cosmopolitan = BarCocktail.create(bar_id: sekend_sun.id, cocktail_id: cosmopolitan.id)
sekend_sun_mojito = BarCocktail.create(bar_id: sekend_sun.id, cocktail_id: mojito.id)
sekend_sun_caipirinha = BarCocktail.create(bar_id: sekend_sun.id, cocktail_id: caipirinha.id)
sekend_sun_long_island_ice_tea = BarCocktail.create(bar_id: sekend_sun.id, cocktail_id: long_island_ice_tea.id)

sundown_bar_old_fashioned = BarCocktail.create(bar_id: sundown_bar.id, cocktail_id: old_fashioned.id)
sundown_bar_cosmopolitan = BarCocktail.create(bar_id: sundown_bar.id, cocktail_id: cosmopolitan.id)
sundown_bar_mojito = BarCocktail.create(bar_id: sundown_bar.id, cocktail_id: mojito.id)
sundown_bar_caipirinha = BarCocktail.create(bar_id: sundown_bar.id, cocktail_id: caipirinha.id)
sundown_bar_long_island_ice_tea = BarCocktail.create(bar_id: sundown_bar.id, cocktail_id: long_island_ice_tea.id)

the_bonnie_bar_old_fashioned = BarCocktail.create(bar_id: the_bonnie_bar.id, cocktail_id: old_fashioned.id)
the_bonnie_bar_cosmopolitan = BarCocktail.create(bar_id: the_bonnie_bar.id, cocktail_id: cosmopolitan.id)
the_bonnie_bar_mojito = BarCocktail.create(bar_id: the_bonnie_bar.id, cocktail_id: mojito.id)
the_bonnie_bar_caipirinha = BarCocktail.create(bar_id: the_bonnie_bar.id, cocktail_id: caipirinha.id)
the_bonnie_bar_long_island_ice_tea = BarCocktail.create(bar_id: the_bonnie_bar.id, cocktail_id: long_island_ice_tea.id)

sweet_afton_old_fashioned = BarCocktail.create(bar_id: sweet_afton.id, cocktail_id: old_fashioned.id)
sweet_afton_cosmopolitan = BarCocktail.create(bar_id: sweet_afton.id, cocktail_id: cosmopolitan.id)
sweet_afton_mojito = BarCocktail.create(bar_id: sweet_afton.id, cocktail_id: mojito.id)
sweet_afton_caipirinha = BarCocktail.create(bar_id: sweet_afton.id, cocktail_id: caipirinha.id)
sweet_afton_long_island_ice_tea = BarCocktail.create(bar_id: sweet_afton.id, cocktail_id: long_island_ice_tea.id)

beer_garden_old_fashioned = BarCocktail.create(bar_id: beer_garden.id, cocktail_id: old_fashioned.id)
beer_garden_cosmopolitan = BarCocktail.create(bar_id: beer_garden.id, cocktail_id: cosmopolitan.id)
beer_garden_mojito = BarCocktail.create(bar_id: beer_garden.id, cocktail_id: mojito.id)
beer_garden_caipirinha = BarCocktail.create(bar_id: beer_garden.id, cocktail_id: caipirinha.id)
beer_garden_long_island_ice_tea = BarCocktail.create(bar_id: beer_garden.id, cocktail_id: long_island_ice_tea.id)

puts '--- CHICAGO BARS ----'
puts '----- seeding 5 chicago bars'
nobodys_darling_bar = Bar.create!(name: 'Nobodys Darling', address: '1744 W Balmoral Ave, Chicago, IL 60640')
hopleaf_bar = Bar.create!(name: 'Hopleaf Bar', address: '5148 N Clark St, Chicago, IL 60640')
green_mill_bar = Bar.create!(name: 'Green Mill Cocktail Lounge', address: '4802 N Broadway St, Chicago, IL 60640')
carols_pub = Bar.create!(name: "Carol's Pub", address: '659 N Clark St, Chicago, IL 60640')
long_room_bar = Bar.create!(name: 'Long Room Chicago', address: '1612 W Irving Park Rd #1, Chicago, IL 60613')

puts '----- seeding 5 cocktails per Chicago bar'
nobodys_darling_bar_old_fashioned = BarCocktail.create(bar_id: nobodys_darling_bar.id, cocktail_id: old_fashioned.id)
nobodys_darling_bar_cosmopolitan = BarCocktail.create(bar_id: nobodys_darling_bar.id, cocktail_id: cosmopolitan.id)
nobodys_darling_bar_mojito = BarCocktail.create(bar_id: nobodys_darling_bar.id, cocktail_id: mojito.id)
nobodys_darling_bar_caipirinha = BarCocktail.create(bar_id: nobodys_darling_bar.id, cocktail_id: caipirinha.id)
nobodys_darling_bar_long_island_ice_tea = BarCocktail.create(bar_id: nobodys_darling_bar.id,
                                                             cocktail_id: long_island_ice_tea.id)

hopleaf_bar_old_fashioned = BarCocktail.create(bar_id: hopleaf_bar.id, cocktail_id: old_fashioned.id)
hopleaf_bar_cosmopolitan = BarCocktail.create(bar_id: hopleaf_bar.id, cocktail_id: cosmopolitan.id)
hopleaf_bar_mojito = BarCocktail.create(bar_id: hopleaf_bar.id, cocktail_id: mojito.id)
hopleaf_bar_caipirinha = BarCocktail.create(bar_id: hopleaf_bar.id, cocktail_id: caipirinha.id)
hopleaf_bar_long_island_ice_tea = BarCocktail.create(bar_id: hopleaf_bar.id, cocktail_id: long_island_ice_tea.id)

green_mill_bar_old_fashioned = BarCocktail.create(bar_id: green_mill_bar.id, cocktail_id: old_fashioned.id)
green_mill_bar_cosmopolitan = BarCocktail.create(bar_id: green_mill_bar.id, cocktail_id: cosmopolitan.id)
green_mill_bar_mojito = BarCocktail.create(bar_id: green_mill_bar.id, cocktail_id: mojito.id)
green_mill_bar_caipirinha = BarCocktail.create(bar_id: green_mill_bar.id, cocktail_id: caipirinha.id)
green_mill_bar_long_island_ice_tea = BarCocktail.create(bar_id: green_mill_bar.id, cocktail_id: long_island_ice_tea.id)

carols_pub_old_fashioned = BarCocktail.create(bar_id: carols_pub.id, cocktail_id: old_fashioned.id)
carols_pub_cosmopolitan = BarCocktail.create(bar_id: carols_pub.id, cocktail_id: cosmopolitan.id)
carols_pub_mojito = BarCocktail.create(bar_id: carols_pub.id, cocktail_id: mojito.id)
carols_pub_caipirinha = BarCocktail.create(bar_id: carols_pub.id, cocktail_id: caipirinha.id)
carols_pub_long_island_ice_tea = BarCocktail.create(bar_id: carols_pub.id, cocktail_id: long_island_ice_tea.id)

long_room_bar_old_fashioned = BarCocktail.create(bar_id: long_room_bar.id, cocktail_id: old_fashioned.id)
long_room_bar_cosmopolitan = BarCocktail.create(bar_id: long_room_bar.id, cocktail_id: cosmopolitan.id)
long_room_bar_mojito = BarCocktail.create(bar_id: long_room_bar.id, cocktail_id: mojito.id)
long_room_bar_caipirinha = BarCocktail.create(bar_id: long_room_bar.id, cocktail_id: caipirinha.id)
long_room_bar_long_island_ice_tea = BarCocktail.create(bar_id: long_room_bar.id, cocktail_id: long_island_ice_tea.id)

puts '--- LA BARS ----'
puts '----- seeding 5 LA bars'
thunderbolt_bar = Bar.create!(name: 'Thunderbolt', address: '1263 W Temple St, Los Angeles, CA 90026')
melody_bar = Bar.create!(name: 'Melody', address: '9132 S Sepulveda Blvd, Los Angeles, CA 90045')
everson_royce_bar = Bar.create!(name: 'Everson Royce Bar', address: '1936 E 7th St, Los Angeles, CA 90021')
ruby_fruit_bar = Bar.create!(name: 'The Ruby Fruit', address: '3510 West Sunset Blvd, Los Angeles, CA')
baby_gee_bar = Bar.create!(name: 'Baby Gee', address: '1227 East Fourth St, Long Beach, CA')

puts '----- seeding 5 cocktails per LA bar'
thunderbolt_bar_old_fashioned = BarCocktail.create(bar_id: thunderbolt_bar.id, cocktail_id: old_fashioned.id)
thunderbolt_bar_cosmopolitan = BarCocktail.create(bar_id: thunderbolt_bar.id, cocktail_id: cosmopolitan.id)
thunderbolt_bar_mojito = BarCocktail.create(bar_id: thunderbolt_bar.id, cocktail_id: mojito.id)
thunderbolt_bar_caipirinha = BarCocktail.create(bar_id: thunderbolt_bar.id, cocktail_id: caipirinha.id)
thunderbolt_bar_long_island_ice_tea = BarCocktail.create(bar_id: thunderbolt_bar.id,
                                                         cocktail_id: long_island_ice_tea.id)

melody_bar_old_fashioned = BarCocktail.create(bar_id: melody_bar.id, cocktail_id: old_fashioned.id)
melody_bar_cosmopolitan = BarCocktail.create(bar_id: melody_bar.id, cocktail_id: cosmopolitan.id)
melody_bar_mojito = BarCocktail.create(bar_id: melody_bar.id, cocktail_id: mojito.id)
melody_bar_caipirinha = BarCocktail.create(bar_id: melody_bar.id, cocktail_id: caipirinha.id)
melody_bar_long_island_ice_tea = BarCocktail.create(bar_id: melody_bar.id, cocktail_id: long_island_ice_tea.id)

everson_royce_bar_old_fashioned = BarCocktail.create(bar_id: everson_royce_bar.id, cocktail_id: old_fashioned.id)
everson_royce_bar_cosmopolitan = BarCocktail.create(bar_id: everson_royce_bar.id, cocktail_id: cosmopolitan.id)
everson_royce_bar_mojito = BarCocktail.create(bar_id: everson_royce_bar.id, cocktail_id: mojito.id)
everson_royce_bar_caipirinha = BarCocktail.create(bar_id: everson_royce_bar.id, cocktail_id: caipirinha.id)
everson_royce_bar_long_island_ice_tea = BarCocktail.create(bar_id: everson_royce_bar.id,
                                                           cocktail_id: long_island_ice_tea.id)

ruby_fruit_bar_old_fashioned = BarCocktail.create(bar_id: ruby_fruit_bar.id, cocktail_id: old_fashioned.id)
ruby_fruit_bar_cosmopolitan = BarCocktail.create(bar_id: ruby_fruit_bar.id, cocktail_id: cosmopolitan.id)
ruby_fruit_bar_mojito = BarCocktail.create(bar_id: ruby_fruit_bar.id, cocktail_id: mojito.id)
ruby_fruit_bar_caipirinha = BarCocktail.create(bar_id: ruby_fruit_bar.id, cocktail_id: caipirinha.id)
ruby_fruit_bar_long_island_ice_tea = BarCocktail.create(bar_id: ruby_fruit_bar.id, cocktail_id: long_island_ice_tea.id)

baby_gee_bar_old_fashioned = BarCocktail.create(bar_id: baby_gee_bar.id, cocktail_id: old_fashioned.id)
baby_gee_bar_cosmopolitan = BarCocktail.create(bar_id: baby_gee_bar.id, cocktail_id: cosmopolitan.id)
baby_gee_bar_mojito = BarCocktail.create(bar_id: baby_gee_bar.id, cocktail_id: mojito.id)
baby_gee_bar_caipirinha = BarCocktail.create(bar_id: baby_gee_bar.id, cocktail_id: caipirinha.id)
baby_gee_bar_long_island_ice_tea = BarCocktail.create(bar_id: baby_gee_bar.id, cocktail_id: long_island_ice_tea.id)

puts '--- CALIFORNIA BARS ----'
puts '----- seeding 5 california bars'
aero_club = Bar.create!(name: 'Aero Club', address: '3365 India St, San Diego, CA 92103')
five_points_bar = Bar.create!(name: 'Five Points', address: '169 W Santa Clara St, San Jose, CA 95113')
sobre_mesa_bar = Bar.create!(name: 'Sobre Mesa', address: '1618 Franklin St, Oakland, CA 94612')
causwells_bar = Bar.create!(name: 'Causwells', address: '2346 Chestnut St, San Francisco, CA 94123')
dento_union_bar = Bar.create!(name: 'Dento Union', address: '849 Union St, San Francisco, CA 94123')

puts '----- seeding 5 cocktails per California bar'
aero_club_old_fashioned = BarCocktail.create(bar_id: aero_club.id, cocktail_id: old_fashioned.id)
aero_club_cosmopolitan = BarCocktail.create(bar_id: aero_club.id, cocktail_id: cosmopolitan.id)
aero_club_mojito = BarCocktail.create(bar_id: aero_club.id, cocktail_id: mojito.id)
aero_club_caipirinha = BarCocktail.create(bar_id: aero_club.id, cocktail_id: caipirinha.id)
aero_club_long_island_ice_tea = BarCocktail.create(bar_id: aero_club.id, cocktail_id: long_island_ice_tea.id)

five_points_bar_old_fashioned = BarCocktail.create(bar_id: five_points_bar.id, cocktail_id: old_fashioned.id)
five_points_bar_cosmopolitan = BarCocktail.create(bar_id: five_points_bar.id, cocktail_id: cosmopolitan.id)
five_points_bar_mojito = BarCocktail.create(bar_id: five_points_bar.id, cocktail_id: mojito.id)
five_points_bar_caipirinha = BarCocktail.create(bar_id: five_points_bar.id, cocktail_id: caipirinha.id)
five_points_bar_long_island_ice_tea = BarCocktail.create(bar_id: five_points_bar.id,
                                                         cocktail_id: long_island_ice_tea.id)

sobre_mesa_bar_old_fashioned = BarCocktail.create(bar_id: sobre_mesa_bar.id, cocktail_id: old_fashioned.id)
sobre_mesa_bar_cosmopolitan = BarCocktail.create(bar_id: sobre_mesa_bar.id, cocktail_id: cosmopolitan.id)
sobre_mesa_bar_mojito = BarCocktail.create(bar_id: sobre_mesa_bar.id, cocktail_id: mojito.id)
sobre_mesa_bar_caipirinha = BarCocktail.create(bar_id: sobre_mesa_bar.id, cocktail_id: caipirinha.id)
sobre_mesa_bar_long_island_ice_tea = BarCocktail.create(bar_id: sobre_mesa_bar.id, cocktail_id: long_island_ice_tea.id)

causwells_bar_old_fashioned = BarCocktail.create(bar_id: causwells_bar.id, cocktail_id: old_fashioned.id)
causwells_bar_cosmopolitan = BarCocktail.create(bar_id: causwells_bar.id, cocktail_id: cosmopolitan.id)
causwells_bar_mojito = BarCocktail.create(bar_id: causwells_bar.id, cocktail_id: mojito.id)
causwells_bar_caipirinha = BarCocktail.create(bar_id: causwells_bar.id, cocktail_id: caipirinha.id)
causwells_bar_long_island_ice_tea = BarCocktail.create(bar_id: causwells_bar.id, cocktail_id: long_island_ice_tea.id)

dento_union_bar_old_fashioned = BarCocktail.create(bar_id: dento_union_bar.id, cocktail_id: old_fashioned.id)
dento_union_bar_cosmopolitan = BarCocktail.create(bar_id: dento_union_bar.id, cocktail_id: cosmopolitan.id)
dento_union_bar_mojito = BarCocktail.create(bar_id: dento_union_bar.id, cocktail_id: mojito.id)
dento_union_bar_caipirinha = BarCocktail.create(bar_id: dento_union_bar.id, cocktail_id: caipirinha.id)
dento_union_bar_long_island_ice_tea = BarCocktail.create(bar_id: dento_union_bar.id,
                                                         cocktail_id: long_island_ice_tea.id)

puts '--- NASHVILLE BARS ----'
puts '----- seeding 5 nashville bars'
springwater_bar = Bar.create!(name: 'Springwater Supper Club & Lounge', address: '115 27th Ave N, Nashville, TN 37203')
henley_bar = Bar.create!(name: 'Henley', address: '2023 Broadway, Nashville, TN 37203')
patterhouse_house = Bar.create!(name: 'The Patterson House', address: '1711 Division St, Nashville, TN 37203')
green_hour_bar = Bar.create!(name: 'Green Hour Bar', address: '1201 5th Ave N, Nashville, TN 37208')
la_jackson_bar = Bar.create!(name: 'L.A. Jackson', address: '401 11th Ave S, Nashville, TN 37203')

puts '----- seeding 5 cocktails per Nashville bar'
springwater_bar_old_fashioned = BarCocktail.create(bar_id: springwater_bar.id, cocktail_id: old_fashioned.id)
springwater_bar_cosmopolitan = BarCocktail.create(bar_id: springwater_bar.id, cocktail_id: cosmopolitan.id)
springwater_bar_mojito = BarCocktail.create(bar_id: springwater_bar.id, cocktail_id: mojito.id)
springwater_bar_caipirinha = BarCocktail.create(bar_id: springwater_bar.id, cocktail_id: caipirinha.id)
springwater_bar_long_island_ice_tea = BarCocktail.create(bar_id: springwater_bar.id,
                                                         cocktail_id: long_island_ice_tea.id)

henley_bar_old_fashioned = BarCocktail.create(bar_id: henley_bar.id, cocktail_id: old_fashioned.id)
henley_bar_cosmopolitan = BarCocktail.create(bar_id: henley_bar.id, cocktail_id: cosmopolitan.id)
henley_bar_mojito = BarCocktail.create(bar_id: henley_bar.id, cocktail_id: mojito.id)
henley_bar_caipirinha = BarCocktail.create(bar_id: henley_bar.id, cocktail_id: caipirinha.id)
henley_bar_long_island_ice_tea = BarCocktail.create(bar_id: henley_bar.id, cocktail_id: long_island_ice_tea.id)

patterhouse_house_old_fashioned = BarCocktail.create(bar_id: patterhouse_house.id, cocktail_id: old_fashioned.id)
patterhouse_house_cosmopolitan = BarCocktail.create(bar_id: patterhouse_house.id, cocktail_id: cosmopolitan.id)
patterhouse_house_mojito = BarCocktail.create(bar_id: patterhouse_house.id, cocktail_id: mojito.id)
patterhouse_house_caipirinha = BarCocktail.create(bar_id: patterhouse_house.id, cocktail_id: caipirinha.id)
patterhouse_house_long_island_ice_tea = BarCocktail.create(bar_id: patterhouse_house.id,
                                                           cocktail_id: long_island_ice_tea.id)

green_hour_bar_old_fashioned = BarCocktail.create(bar_id: green_hour_bar.id, cocktail_id: old_fashioned.id)
green_hour_bar_cosmopolitan = BarCocktail.create(bar_id: green_hour_bar.id, cocktail_id: cosmopolitan.id)
green_hour_bar_mojito = BarCocktail.create(bar_id: green_hour_bar.id, cocktail_id: mojito.id)
green_hour_bar_caipirinha = BarCocktail.create(bar_id: green_hour_bar.id, cocktail_id: caipirinha.id)
green_hour_bar_long_island_ice_tea = BarCocktail.create(bar_id: green_hour_bar.id, cocktail_id: long_island_ice_tea.id)

la_jackson_bar_old_fashioned = BarCocktail.create(bar_id: la_jackson_bar.id, cocktail_id: old_fashioned.id)
la_jackson_bar_cosmopolitan = BarCocktail.create(bar_id: la_jackson_bar.id, cocktail_id: cosmopolitan.id)
la_jackson_bar_mojito = BarCocktail.create(bar_id: la_jackson_bar.id, cocktail_id: mojito.id)
la_jackson_bar_caipirinha = BarCocktail.create(bar_id: la_jackson_bar.id, cocktail_id: caipirinha.id)
la_jackson_bar_long_island_ice_tea = BarCocktail.create(bar_id: la_jackson_bar.id, cocktail_id: long_island_ice_tea.id)

puts '----- seeding the 5 main users'
user1 = User.create!(username: 'guy1', password: '123123123123')
user2 = User.create!(username: 'guy2', password: '123123123123')
user3 = User.create!(username: 'guy3', password: '123123123123')
user4 = User.create!(username: 'guy4', password: '123123123123')
user5 = User.create!(username: 'guy5', password: '123123123123')

#### find a faker random comment gem
puts '----- seeding 5 reviews for user1'
Review.create(stars: 5, comment: 'My favorite one around', user_id: user1.id,
              bar_cocktail_id: basik_bar_old_fashioned.id)
Review.create(stars: 4, comment: 'Not the best but very very good', user_id: user1.id,
              bar_cocktail_id: ore_bar_mojito.id)
Review.create(stars: 3, comment: 'Eh not good but not bad', user_id: user1.id,
              bar_cocktail_id: ore_bar_long_island_ice_tea.id)
Review.create(stars: 5, comment: "Can't beat this cosmo", user_id: user1.id, bar_cocktail_id: basik_bar_cosmopolitan.id)
Review.create(stars: 5, comment: 'My favorite one of all!', user_id: user1.id,
              bar_cocktail_id: blinkys_bar_caipirinha.id)

puts '----- seeding 5 reviews for user2'
Review.create(stars: 5, comment: 'My favorite one around', user_id: user2.id,
              bar_cocktail_id: sunken_harbor_club_bar_old_fashioned.id)
Review.create(stars: 4, comment: 'Not the best but decent', user_id: user2.id,
              bar_cocktail_id: mace_bar_cosmopolitan.id)
Review.create(stars: 3, comment: 'Ehhhh', user_id: user2.id, bar_cocktail_id: attaboy_bar_caipirinha.id)
Review.create(stars: 5, comment: "Can't beat this one! Delicious", user_id: user2.id,
              bar_cocktail_id: sekend_sun_caipirinha.id)
Review.create(stars: 5, comment: 'My favorite one of all!', user_id: user2.id,
              bar_cocktail_id: the_bonnie_bar_long_island_ice_tea.id)

puts '----- seeding 5 reviews for user3'
Review.create(stars: 5, comment: 'My favorite old fashioned around', user_id: user3.id,
              bar_cocktail_id: nobodys_darling_bar_mojito.id)
Review.create(stars: 4, comment: 'Not the best but very very good', user_id: user3.id,
              bar_cocktail_id: carols_pub_cosmopolitan.id)
Review.create(stars: 3, comment: 'Eh not good but not bad', user_id: user3.id, bar_cocktail_id: melody_bar_mojito.id)
Review.create(stars: 5, comment: "Can't beat this mojito!!!", user_id: user3.id,
              bar_cocktail_id: sobre_mesa_bar_mojito.id)
Review.create(stars: 5, comment: 'My favorite one of all!', user_id: user3.id,
              bar_cocktail_id: dento_union_bar_old_fashioned.id)

puts '----- seeding 5 reviews for user4'
Review.create(stars: 5, comment: 'My favorite one around', user_id: user4.id,
              bar_cocktail_id: springwater_bar_old_fashioned.id)
Review.create(stars: 4, comment: 'Not the best but very very good', user_id: user4.id,
              bar_cocktail_id: henley_bar_caipirinha.id)
Review.create(stars: 3, comment: 'Eh not good but not bad', user_id: user4.id,
              bar_cocktail_id: patterhouse_house_cosmopolitan.id)
Review.create(stars: 5, comment: "Can't beat this old fashioned", user_id: user4.id,
              bar_cocktail_id: baby_gee_bar_old_fashioned.id)
Review.create(stars: 5, comment: 'My favorite one of all!', user_id: user4.id,
              bar_cocktail_id: baby_gee_bar_caipirinha.id)

puts '----- seeding 5 reviews for user5'
Review.create(stars: 5, comment: 'My favorite one around', user_id: user5.id,
              bar_cocktail_id: aero_club_old_fashioned.id)
Review.create(stars: 4, comment: 'Not the best but very very good', user_id: user5.id,
              bar_cocktail_id: five_points_bar_old_fashioned.id)
Review.create(stars: 3, comment: 'Eh not good but not bad', user_id: user5.id, bar_cocktail_id: belemans_bar_mojito.id)
Review.create(stars: 5, comment: "Can't beat this cosmo", user_id: user5.id,
              bar_cocktail_id: sidneys_five_bar_caipirinha.id)
Review.create(stars: 5, comment: 'My favorite one of all!', user_id: user5.id,
              bar_cocktail_id: the_bonnie_bar_old_fashioned.id)

puts 'Seeded well!'
