# Code Along: Modifying Clinic Serializers

Now that we can see some data it's time to update our serializers or these
relationships will not be as useful as they can.

Let's add the `patients` attribute to our attributes list in our `doctor` serializer.

Our finished serializer should look like this:

```ruby
class DoctorSerializer < ActiveModel::Serializer
  attributes :id, :given_name, :family_name, :patients
end
```

Let's do the same in our `patient` serializer, it should look like this once,
we're done.

```ruby
class PatientSerializer < ActiveModel::Serializer
  attributes :id, :family_name, :given_name, :doctors
end
```
