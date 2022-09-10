class StatesController < ApplicationController

    def index
        states = State.all
        render json: states
    end

    def create
        state = State.create(state_params)
        if state.save
            render json: state, status: :created
        else
            render json: state.errors, status: :unprocessable_entity
        end
    end

end