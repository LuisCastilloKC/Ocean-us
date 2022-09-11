class EventsController < ApplicationController

    def index
        events = Event.all
        render json: events
    end

    def create
        event = Event.create(event_params)
        if event.save
            render json: event, status: :created
        else
            render json: event.errors, status: :unprocessable_entity
        end
    end

    private

    def event_params
        params.require(:event).permit(
            :address, 
            :zipcode, 
            :image, 
            :like, 
            :date, 
            :eventDescription, 
            :title, 
            :longitude, 
            :latitude, 
            :city_id, 
            :user_id
        )
    end

end