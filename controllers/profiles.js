import { Profile } from '../models/profile.js'
import {v2 as cloudinary} from 'cloudinary'

function create(req, res) {
  Profile.create(req.body)
  .then(profile => res.json(profile))
  .catch(err => {
    console.log(err)
    res.json(err)
  })
}

function index(req, res) {
  Profile.find({})
    .then(profiles => res.json(profiles))
    .catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
}
function show(req, res) {
  Profile.findById(req.params.id)
    .then(profile => res.json(profile))
    .catch(err => res.json(err))
}

function update(req, res) {
  Profile.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(profile => res.json(profile))
    .catch(err => res.json(err))
}

export {
  create,
  index,
  show,
  update
}
