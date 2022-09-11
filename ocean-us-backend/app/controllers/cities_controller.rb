class CitiesController < ApplicationController

    def index
        cities = City.all
        render json: cities
    end

    def create
        city = City.create(city_params)
        if city.save
            render json: city, status: :created
        else
            render json: city.errors, status: :unprocessable_entity
        end
    end

    private

    def city_params
        params.require(:city).permit(:cityName, :state_id)
    end

end