import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './ListCard.css';

const MyListCard = () => {
  const listItems = [
    { title: 'Lactose Monohydrate', count: 48, type: 'Products', updated: '12h ago' },
    { title: 'Sumit Kumar', count: 23, type: 'People', updated: '12h ago' },
    // ... other items
  ];

  return (
    <Card className="my-list-card">
      <CardContent>
        <Typography variant="h5" component="div">
          My Lists
        </Typography>
        <IconButton className="view-all-button">
          View All
        </IconButton>
        {listItems.map((item, index) => (
          <div key={index} className="list-item">
            <Typography variant="body1" component="p">
              {item.title}
            </Typography>
            <Typography
              variant="body1"
              component="p"
              className={`count-type ${item.highlight ? 'highlight' : ''}`}
            >
              {`${item.count} ${item.type}`}
              </Typography>
            <Typography variant="body2" component="p" className="updated-time">
              Last updated {item.updated}
            </Typography>
            <IconButton className="more-button">
              <MoreVertIcon />
            </IconButton>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default MyListCard;
