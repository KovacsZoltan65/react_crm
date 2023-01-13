import { ITag } from '@app/components/common/Tag/Tag';
import { AppDate } from '../../../constants/Dates';

class Validator {
    validate() {
        return true;
    }
}

export class AuthorValidator extends Validator {

    constructor(initial, current) {
        super();
        this.initial = initial;
        this.current = current;
    }

    validate() {
        return this.current ? this.initial.includes(this.current) : true;
    }
}

export class TitleValidator extends Validator {

    constructor(initial, current) {
        super();
        this.initial = initial;
        this.current = current;
    }

    validate() {
        return this.current ? this.initial.includes(this.current) : true;
    }
}

export class DatesValidator extends Validator {

    constructor(initial, current) {
        super();
        this.initial = initial;
        this.current = current;
    }

    validate() {
        const [from, to] = this.current;
        return from ? this.initial.isAfter(from) && this.initial.isBefore(to) : true;
    }
}

export class TagsValidator extends Validator {

    constructor(initial, current) {
        super();
        this.initial = initial;
        this.current = current;
    }

    validate() {
        return this.current.length
            ? !!this.initial.filter((n) => {
                return this.current.indexOf(n) !== -1;
            }).length
            : true;
    }
}
