class EventsController < ApplicationController
    before_action :set_event, only: [:show, :update, :destroy]
    before_action :authorized

    def index
        events = Event.all
        render json: events
    end

    def show
        event = Event.find(params[:id])
        render json: event
    end

    def create
        event = Event.create(event_params)
        if event.save
            render json: event, status: :created
        else
            render json: event.errors, status: :unprocessable_entity
        end
    end

    def update
        event = Event.find(params[:id])
        if event.update_attributes(event_params)
            render json: event
        else
            render json: event.errors, status: :unprocessable_entity
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