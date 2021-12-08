class Teacher {
    constructor(name, age){
        this.name = name
        this.age = age
    }

    introduction(){
        return `Hi my name is ${this.name}`
    } 

    comment(forum, comment){
        forum.setComment(comment, this.name);
    }
}

class Student {
    constructor(HomeWork){
        this.HomeWork = HomeWork;
        this.comments = []
    }

    setComment(comment, TeacherName){
        this.comments.push({ comment, TeacherName });
    }

    showComments(){
        this.comments.forEach(comment => console.log(`${comment.TeacherName}: ${comment.comment}`));
    }
}


class classroom{
    constructor(Studentlist){
        this.Studentlist = Studentlist;
        this.comments = []
    }
    setComment(comment, StudentHomeWork){
        this.comments.push({ comment, StudentHomeWork});
    }
    showComments(){
        this.comments.forEach(comment => console.log(`${comment.StudentHomeWork}: ${comment.comment}`))
    }
}


const teacher = new Teacher("Jake",29)
const Forum = new Student("Completed")
const classlist = new classroom(1)

teacher.comment(Forum, 'HomeWork was Hard!')
//classlist.comment(Forum, "There are 1 students total")
console.log(teacher)
console.log(Forum)
console.log(classlist)





