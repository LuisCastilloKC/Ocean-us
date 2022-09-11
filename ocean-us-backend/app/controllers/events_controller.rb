class EventsController < ApplicationController

    def index
        events = Event.all
        render json: events
    end

    def create
        event = Event.create(even_params)
        if event.save
            render json: event, status: :created
        else
            render json: event.errors, status: :unprocessable_entity
        end
    end

end