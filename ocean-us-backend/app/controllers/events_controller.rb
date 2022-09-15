class EventsController < ApplicationController
    before_action :set_event, only: [:show, :update, :destroy]
    before_action :authorized

    # Display all Events
    def index
        events = Event.all
        render json: events
    end
    # display single Event by one id 
    def show
        event = Event.find(params[:id])
        render json: event
    end
    # Create an Event
    def create
        event = Event.create(event_params)
        #  event.user = user.id - Attach a user to every event created. 
        # This happen because in application controller current_user method look for a user.id
        event.user = user.id
        if event.save
            render json: event, status: :created
        else
            render json: event.errors, status: :unprocessable_entity
        end
    end
    # Update a single Event
    def update
        event = Event.find(params[:id])
        if event.update_attributes(event_params)
            render json: event
        else
            render json: event.errors, status: :unprocessable_entity
        end
    end

    # Delete a single Event
    def destroy
        event = Event.find(params[:id])
        event.destroy
        render json: event
    end
    # Private, any method after private it only accesible within this class
    private

    def set_event
        event = Event.find(params[:id])
    end

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