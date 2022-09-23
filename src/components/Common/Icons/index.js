import {
    Add,
    AddFile,
    Stack,
    Admin,
    ArrowDown,
    ArrowUp,
    BarChart,
    Bell,
    Book,
    Calendar,
    ChevronDown,
    Cross,
    QuestionMark,
  } from "../../../assets/Icons";

export const iconListObj = {
        Add: Add,
        AddFile: AddFile,
        Stack: Stack,
        Admin: Admin,
        ArrowDown: ArrowDown,
        ArrowUp: ArrowUp,
        BarChart: BarChart,
        Bell: Bell,
        Book: Book,
        Calendar: Calendar,
        ChevronDown: ChevronDown,
        Cross: Cross,
        QuestionMark: QuestionMark,
    };

export const iconList = Object.keys(iconListObj).map(key => ({
    name: key,
    Icon: iconListObj[key]
}))
