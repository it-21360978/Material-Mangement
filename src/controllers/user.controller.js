//const user = require ('../models/user');


/*exports.User= async (req, res) => {

    try {
        const {userId} = req.body;
        const User = await user.findOne({userId});
        if (!User) {
          res.status(401).send('Invalid id');
        } else if (User.isTeacher)
         {
          res.redirect('/teacher-dashboard');
        } else {
          res.redirect('/student-dashboard');
        }
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    
    }
   
  };

  exports.User = async (req, res) => {
    try {
      const { userId } = req.body;
      const User = await user.findOne({ userId });
      if (!User) {
        res.status(401).send('Invalid id');
      } else if (User.isTeacher) {
        // Set the user's session data
        req.session.userId = User.userId;
        req.session.isTeacher = User.isTeacher;
        // Redirect to the teacher dashboard
        res.redirect('/teacher-dashboard');
      } else {
        // Set the user's session data
        req.session.userId = User.userId;
        req.session.isTeacher = User.isTeacher;
        // Redirect to the student dashboard
        res.redirect('/student-dashboard');
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  };
  
  // Logout endpoint
  exports.Logout = async (req, res) => {
    try {
      // Clear the user's session
      req.session.destroy((err) => {
        if (err) {
          console.log(err);
          return res.status(500).send({ msg: 'Error occurred while logging out' });
        }
        // Redirect to the login page
        res.redirect('/login');
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({ msg: 'Error occurred while logging out' });
    }
  };

  router.post('/user', User);
router.get('/logout', Logout);
  */

const Teacher = require('../models/teacher.model');
const Student = require('../models/TestStudent');


exports.User= async (req, res) => {
  try {
    const { username, email, role } = req.body;

    if (role === 'student') {
      // Retrieve student data from database
      const student = await Student.findOne({ username, email });
      if (!student) {
        return res.status(401).send('Invalid credentials');
      }
      res.send({ user: student, role: 'student' });
    } else if (role === 'teacher') {
      // Retrieve teacher data from database
      const teacher = await Teacher.findOne({ username, email });
      if (!teacher) {
        return res.status(401).send('Invalid credentials');
      }
      res.send({ user: teacher, role: 'teacher' });
    } else {
      res.status(401).send('Invalid role');
    }
  } catch (error) {
    console.log(error);
    res.status(500).send('Internal Server Error');
  }
};

