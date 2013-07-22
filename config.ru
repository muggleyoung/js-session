require './app'

class Todo:: Sinatra::Base
    get '/' do
        html :index
    end
end
