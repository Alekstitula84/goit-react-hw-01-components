import { Profile } from './Profile/profile';
import { Statistics } from './Statistics/statistics';
import { FriendList } from './Friends/friendList';
import { TransactionHistory } from './Transactions/transaction';

import user from './UserData/user.json';
import data from './UserData/data.json';
import friends from './UserData/friends.json';
import transactions from './UserData/transactions.json';

export const App = () => {
    return (
        <div>
            <Profile
                username={user.username}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
                stats={user.stats}
            />
            <Statistics title="Upload stats" stats={data} />
            <FriendList friends={friends} />
            <TransactionHistory items={transactions} />
        </div>
    );
};

