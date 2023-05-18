# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_05_18_214932) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bar_cocktails", force: :cascade do |t|
    t.integer "cocktail_id"
    t.integer "bar_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "bars", force: :cascade do |t|
    t.string "name"
    t.string "address"
    t.string "city"
    t.string "state"
    t.string "country"
    t.decimal "latitude"
    t.decimal "longitude"
    t.string "image"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "cocktails", force: :cascade do |t|
    t.string "name"
    t.string "image"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "ingredients", default: [], array: true
  end

  create_table "reviews", force: :cascade do |t|
    t.integer "stars"
    t.text "comment"
    t.integer "user_id"
    t.integer "bar_cocktail_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.decimal "latitude"
    t.decimal "longitude"
    t.string "street"
    t.string "city"
    t.string "state"
    t.string "country"
    t.integer "postcode"
    t.string "address"
    t.string "ip_address"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
