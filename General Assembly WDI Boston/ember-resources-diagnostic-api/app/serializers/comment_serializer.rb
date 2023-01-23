class CommentSerializer < ActiveModel::Serializer
  attributes :id, :subject, :body
end
